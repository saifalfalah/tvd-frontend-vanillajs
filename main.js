let responseData;

let myRequest = new Request(
  "https://f0abcdd5.ngrok.io/stats?download=true&data=true"
);

const myInit = {
  method: "GET",
  mode: "cors"
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const responseDiv = document.getElementById("resolveData");
const downloadDiv = document.getElementById("downloadData");

fetch(myRequest, myInit)
  .then(response => response.json())
  .then(data => {
    responseData = data;
    console.log(data);
    let ul = createNode("ul");
    let li1 = createNode("li");
    li1.appendChild(
      document.createTextNode(
        `Number of requests today: ${responseData.dataStats.today.NOR_today}`
      )
    );
    append(ul, li1);

    let li2 = createNode("li");
    li2.appendChild(
      document.createTextNode(
        `Number of requests yesterday: ${
          responseData.dataStats.today.NOR_yesterday
        } (${responseData.dataStats.today.NOR_yesterday_cpc}% vs today)
				${responseData.dataStats.today.NOR_yesterday_cpc > 0 ? "💚" : "❤️"}`
      )
    );
    append(ul, li2);

    let li3 = createNode("li");
    li3.appendChild(
      document.createTextNode(
        `Average number of requests in last 7 days: ${
          responseData.dataStats.today.ANOR_thisWeek
        } (${responseData.dataStats.today.ANOR_thisWeek_cpc}% vs today)
				${responseData.dataStats.today.ANOR_thisWeek_cpc > 0 ? "💚" : "❤️"}`
      )
    );
    append(ul, li3);

    let li4 = createNode("li");
    li4.appendChild(
      document.createTextNode(
        `Average number of requests in last 30 days: ${
          responseData.dataStats.today.ANOR_thisMonth
        } (${responseData.dataStats.today.ANOR_thisMonth_cpc}% vs today) ${
          responseData.dataStats.today.ANOR_thisMonth_cpc > 0 ? "💚" : "❤️"
        }`
      )
    );
    append(ul, li4);

    append(responseDiv, ul);

    let ul2 = createNode("ul");
    let li5 = createNode("li");
    li5.appendChild(
      document.createTextNode(
        `Number of requests today: ${
          responseData.downloadStats.today.NOR_today
        }`
      )
    );
    append(ul2, li5);

    let li6 = createNode("li");
    li6.appendChild(
      document.createTextNode(
        `Number of requests yesterday: ${
          responseData.downloadStats.today.NOR_yesterday
        } (${responseData.downloadStats.today.NOR_yesterday_cpc}% vs today)
				${responseData.downloadStats.today.NOR_yesterday_cpc > 0 ? "💚" : "❤️"}`
      )
    );
    append(ul2, li6);

    let li7 = createNode("li");
    li7.appendChild(
      document.createTextNode(
        `Average number of requests in last 7 days: ${
          responseData.downloadStats.today.ANOR_thisWeek
        } (${responseData.downloadStats.today.ANOR_thisWeek_cpc}% vs today)
				${responseData.downloadStats.today.ANOR_thisWeek_cpc > 0 ? "💚" : "❤️"}`
      )
    );
    append(ul2, li7);

    let li8 = createNode("li");
    li8.appendChild(
      document.createTextNode(
        `Average number of requests in last 30 days: ${
          responseData.downloadStats.today.ANOR_thisMonth
        } (${responseData.downloadStats.today.ANOR_thisMonth_cpc}% vs today) ${
          responseData.downloadStats.today.ANOR_thisMonth_cpc > 0 ? "💚" : "❤️"
        }`
      )
    );
    append(ul2, li8);

    append(downloadDiv, ul2);

    let loading = document.getElementById("loading");
    loading.parentNode.removeChild(loading);
  })
  .catch(error => {
    console.log(`An error occurred: ${error}`);
  });
