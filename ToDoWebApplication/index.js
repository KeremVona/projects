var paragraphCount = 0;
var buttonEditCount = 0;
var buttonDeleteCount = 0;
var buttonStateCount = 0;

$("#button-add").click(function () { 
    //Add paragraph
    paragraphCount++;
    buttonEditCount++;
    buttonDeleteCount++;
    buttonStateCount++;
    const whole = $("<div>").addClass("segment");

    var inputMainValue = $("#input-main").val();
    const para = $("<p>").text(inputMainValue).attr("id", `todo${paragraphCount}`).addClass("todo");
    const butt = $("<button>").text("Edit").attr("id", `edit${buttonEditCount}`).addClass("button-edit");
    const butt2 = $("<button>").text("Delete").attr("id", `delete${buttonDeleteCount}`).addClass("button-delete");
    const butt3 = $("<button>").text("Done").attr("id", `state${buttonStateCount}`).addClass("button-state");

    whole.append(para);
    whole.append(butt);
    whole.append(butt2);
    whole.append(butt3);
    $(".second").append(whole);

    //Add break line

   //$(".second").append($("<br>"));

    //Add button
    //buttonEditCount++;
    /*const butt = $("<button>").text("Edit").attr("id", `edit${buttonEditCount}`).addClass("button-edit");

    $(".second").append(butt);*/
    console.log("inputMainValue ", inputMainValue);
    console.log("button clicked");
});

$(".second").on("click", ".button-edit", function() {
    editHideAndShow();
    console.log("edit button clicked");
})

function editHideAndShow() {
    var div = $(".editShowAndHide");

    if (div.css("display") === "none") {
        div.css("display", "block"); 
    }
    else {
        div.css("display", "none");
    }
}