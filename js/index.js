$(document).ready(function () {
  $(".btn-success").on("click", function(e) {
    e.preventDefault();

    var newWord = $("#newWord").val();

    var newRow = $("<tr>");
    var wordTd = $("<td>").append(newWord);
    var deleteBtn = $("<button>").append("Delete");
    var deleteTd = $("<td>").append(deleteBtn);
    var doneBtn = $("<button>").append("Done ?");
    var doneTD = $("<td>").append(doneBtn);
    
    newRow.append(wordTd);
    newRow.append(deleteTd);
    newRow.append(doneTD);
    newRow.append()
    $("tbody").append(newRow);

    deleteBtn.addClass("btn btn-danger");
    doneBtn.addClass("btn btn-primary")
    $("newWord").val("").focus();
    
  });

  $("table").on("click", ".btn-danger", function() {
    $(this).parent().parent().remove();
  });


});