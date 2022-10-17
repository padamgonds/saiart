/*  Method Name - globalid
*  Created By - Apoorva
*  Created On - 15 Jan 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This variable is used to get textbox id of different field.      
*/

var globalid = "";


$('#lbMailCCTo').click(function (e) {
    e.stopPropagation();
});
$('html').click(function (e) {
    if (e.target.id != 'txtMailCCTo')
        $('#lbMailCCTo').attr('style', 'display:none');
});


$('#lbAddMailRecpt').click(function (e) {
    e.stopPropagation();
});
$('html').click(function (e) {
    if (e.target.id != 'txtAddMailRecpt')
        $('#lbAddMailRecpt').attr('style', 'display:none');
});


/*  Method Name - function keyUP
*  Created By - Apoorva 
*  Created On - 2nd Feb 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/
function keyUP(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();

    $.ajax({
        url: "../BidEscalationAjaxCall.aspx",
        type: "POST",
        data: { Val: bidmanager },
        success: function (response) {
            if (response != 'fail') {

                var data = $.parseJSON(response);

                $('#' + listbox).html('');
                //class1 is defined for the alternate color for the listbox purpose.

                var class1 = '';
                for (var i = 0; i < data.length; i++) {

                    if (i % 2 == 0) {
                        class1 = "gray";
                    }
                    else {
                        class1 = "light";
                    }
                    $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,' + id + ');">' + data[i].EMPLOYEE_ID + " (" + data[i].EMPNAME + ")" + '</br>' + data[i].EMAILID + '</li>');
                    $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                }
            }
        }
    });
}
/* Method Name - function getempid
*  Created By  - Apoorva 
*  Created On  - 2nd Feb 2016
*  Modified By - 
*  Modified On - 
*  Purpose     - This function is used for onclick event of the list box to get EMPLOYEE_ID & text box ID purpose.  
*/
function getempid(val) {
    var id = $(val).attr("id")
    document.getElementById(globalid).value = id;
    $(val).parent().css('display', 'none');
}