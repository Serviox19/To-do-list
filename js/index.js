$(document).ready(function () {
  $(".btn-success").on("click", function(e) {
    e.preventDefault();

    var newWord = $("#newWord").val();

    var newRow = $("<tr>");
    var wordTd = $("<td>").append(newWord);
    var deleteBtn = $("<button>").append("<span class='glyphicon glyphicon-trash'></span>");
    var deleteTd = $("<td>").append(deleteBtn);
    var doneBtn = $("<button>").append("<span class='glyphicon glyphicon-ok'></span>");
    var doneTD = $("<td>").append(doneBtn);
    
    newRow.append(wordTd);
    newRow.append(deleteTd);
    newRow.append(doneTD);
    newRow.append()
    $("tbody").append(newRow);
    $("td").css("text-align", "center");
    $("tbody td:first-child").css({ "font-family": "Verdana serif", "font-size": "1.2em", "font-weight": "bold", })

    deleteBtn.addClass("btn btn-danger");
    doneBtn.addClass("btn btn-primary")
    $("newWord").val("").focus();
    
  });

  $("table").on("click", ".btn-danger", function() {
    $(this).parent().parent().remove();
  });

  $("table").on("click", ".btn-primary", function() {
    $(this).parent().parent().css("text-decoration", "line-through")
    $(this).remove();
  });

});