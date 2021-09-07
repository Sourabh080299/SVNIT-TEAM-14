function getData() {
    let companyDropDown, graphDropDown, fromDate, toDate;
    companyDropDown = document.getElementById("companyName");
    let companyName = companyDropDown.options[companyDropDown.selectedIndex].text;
    graphDropDown = document.getElementById("graphType");
    let graphType = graphDropDown.options[graphDropDown.selectedIndex].text;
    fromDate = document.getElementById("fromDate");
    toDate = document.getElementById("toDate");
    console.log(companyName, graphType, fromDate, toDate);
}