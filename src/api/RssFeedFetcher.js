class RssFeedFetcher {
  constructor() {
      this.rssFeed = 'https://anchor.fm/s/10421aa84/podcast/rss';
  }

    parseXMLString(itemElement: mixed, node: string): string {
        const html = itemElement.querySelector(node).innerHTML;
        let newStr = html.replace(/^<!\[CDATA\[/, "");
        newStr = newStr.replace(/\]\]>$/, "");
        return newStr;
  }

  formatDate(dateString: string): string {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
  }

  fetchSummary() {
    fetch(this.rssFeed)
        .then(response => response.text())
        .then(str => new window.DOMParser()
            .parseFromString(str, "text/xml"))
        .then(data => {
            const channel = data.querySelectorAll("channel");

            let html = ``;
            channel.forEach(itemElement => {
              html += `
              <div>
              ${itemElement.querySelector("title").innerHTML}
              <h2 className="text-white mb-4">About ${this.parseXMLString(itemElement, "title")}</h2>

              <p>${this.parseXMLString(itemElement, "description")}</p>
              </div>
              `;
            });

            var summary = document.getElementById("rss-summary-id");
            if (summary) {
                summary.innerHTML = html;
            }
        });
      }

  fetchEpisodes() {
    fetch(this.rssFeed)
        .then(response => response.text())
        .then(str => new window.DOMParser()
            .parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");

            let html = ``;
            items.forEach(itemElement => {
                const link = this.parseXMLString(itemElement, "link");
                html += `
                    <div>
                        <h4>
                            <a href=${link}
                               target="_blank" rel="noopener">
                                 ${this.parseXMLString(itemElement, "title")}
                            </a>
                        </h4>
                        <a href=${link}>
                            <button class="btn btn-primary">
                                Listen
                            </button>
                        </a>
                        <p>
                           ${this.parseXMLString(itemElement, "description")}
                        </p>
                        <p>Published: ${this.formatDate(this.parseXMLString(itemElement, "pubDate"))}</p>
                        <p>Duration: ${this.parseXMLString(itemElement, "duration")}</p>
                    </div>
                    `;
            });

            var feed = document.getElementById("rss-feed-id");
            if (feed) {
                feed.innerHTML = html;
            }
        });
      }
    }

export default RssFeedFetcher;
