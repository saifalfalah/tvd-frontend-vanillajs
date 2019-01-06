let responseData;

let myRequest = new Request("https://tvd.now.sh/stats?download=true&data=true");

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
const dateTime = document.getElementById("dateTime");

fetch(myRequest, myInit)
  .then(response => response.json())
  .then(data => {
    responseData = data;
    console.log(data);

    let p3 = createNode("p");

    p3.innerHTML = `⏰ The time is: ${new Date().toISOString()}`;

    append(dateTime, p3);

    let p = createNode("p");
    p.innerHTML = `💻 Server timestamp: ${responseData.timestamp}`;
    append(dateTime, p);

    let p2 = createNode("p");
    p2.innerHTML = `🥗 Serving stats from: ${responseData.todayStart} to ${
      responseData.todayEnd
    }`;
    append(dateTime, p2);

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

    let p4 = createNode("p");
    p4.innerHTML = `/resolve endpoint`;
    append(responseDiv, p4);

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

    let p5 = createNode("p");
    p5.innerHTML = `/download endpoint`;
    append(downloadDiv, p5);

    append(downloadDiv, ul2);

    // removing the loading div from the dom

    let loading = document.getElementsByClassName("loadingHeader");
    loading[0].parentNode.removeChild(loading[0]);

    // displaying the stats header

    let statsHeader = document.getElementsByClassName("statsHeader")[0];
    statsHeader.style.display = "block";

    // displaying the information header

    let infoHeader = document.getElementsByClassName("infoHeader")[0];
    infoHeader.style.display = "block";
  })
  .catch(error => {
    console.log(error);
    console.log(`An error occurred: ${error}`);
    document.getElementsByClassName("loadingHeader")[0].style.display = "none";
    document.getElementsByClassName("errorHeader")[0].style.display = "block";
    // let errorBox = document.getElementsByClassName("errorBox")[0];
    let errorText = document.getElementById("errorText");
    let ep = createNode("p");
    ep.innerHTML = `An error occurred ${error}`;
    append(errorText, ep);
    document.getElementsByClassName("errorBox")[0].style.display = "block";
  });
