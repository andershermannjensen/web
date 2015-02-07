/**
 * A page-loader, that fetches pages from GitHub
 */
function loadPage(pageName, htmlElement) {
    var baseUrl= "pages/";

    $.ajax({ url: baseUrl + pageName, dataType: "html", data: "", success: function (data) {
        htmlElement.html(marked(data));
    }});
}