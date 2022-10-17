function GetChkValue() {
    var checked_checkboxes = $("[id*=ctl00_ContentPlaceHolder1_chkTask] input:checked");
    var message = "";
    var id = "";
    var TaskID = "";
    var Bid_Id = $('#ctl00_ContentPlaceHolder1_hdn_BidId').val();

    //  alert(Bid_Id);
    $("[id*=ctl00_ContentPlaceHolder1_chkTask] input:checked").val(function (index, value) {
        var chkBoxVal = $("label[for='" + $(this).attr("id") + "']").text();
        id = $(this).closest('span').attr('id');
        // var value = index + " : " + chkBoxVal + " : " + id;
        TaskID += id + ",";
    });
    if (TaskID != "") {
        /*To Bind Selected Tasks Into Grid*/
        $("#ctl00_ContentPlaceHolder1_PopUpTaskTable").show();
        GetPreviewTaskInfo(Bid_Id, TaskID);

    }
    else {
        $("#ctl00_ContentPlaceHolder1_PopUpTaskTable").hide();
    }
}

function chkRiskValue() {


    // GetPreviewRiskInfo(Bid_Id, TaskID);
    var TaskID = "";
    var Bid_Id = $('#ctl00_ContentPlaceHolder1_hdn_BidId').val();
    GetPreviewRiskInfo(Bid_Id, TaskID);
    // }

}



/*  Method Name - OpenModelPopUP
*  Created By - APOORVA-INCRUST 
*  Created On - 8th Nov 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This method is used to open modal OpenModelPopup for Preview DSR
*/
function OpenModelPopUP() {
    $('#PreviewModalpopup').modal('show');
    setTimeout(function () {
        //Subject Line//
        var txtDSRSubjectLine = "";
        txtDSRSubjectLine = $('#ctl00_ContentPlaceHolder1_txtDSRSubjectLine').val();
        document.getElementById('lblsubject_dsr').innerHTML = txtDSRSubjectLine;

        //Dsr Send To//;
        var val_DSRto = ""
        val_DSRto = $('#ctl00_ContentPlaceHolder1_txtDSRTo').val();
        document.getElementById('lblTo_dsr').innerHTML = val_DSRto;

        //Dsr Send CC//;
        var val_DSRcc = "";
        val_DSRcc = $('#ctl00_ContentPlaceHolder1_txtDSRCC').val();
        document.getElementById('lblCc_dsr').innerHTML = val_DSRcc;

        //Short Description//
        var txtShortDescription = "";
        txtShortDescription = $('#ctl00_ContentPlaceHolder1_txtShortDescriptionForBid').val();
        document.getElementById('lbl_short_desc').innerHTML = txtShortDescription;

        //DSR Notes//
        var val_Note = "";
        val_Note = $('#ctl00_ContentPlaceHolder1_txtNotes').val();
        document.getElementById('lbldsr_notes').innerHTML = val_Note;

        //BidSubmisssionDate//
        var BidSubmissionDate = "";
        BidSubmissionDate = $('#ctl00_ContentPlaceHolder1_hdn_BidSubmissionDate').val();
        document.getElementById('lblsubmission_dsr').innerHTML = BidSubmissionDate;


        //TCV//
        var TCV = "";
        TCV = $('#ctl00_ContentPlaceHolder1_hdn_TCV').val();
        document.getElementById('lbltcv_dsr').innerHTML = TCV;


        //DealDuration//
        var DealDuration = "";
        DealDuration = $('#ctl00_ContentPlaceHolder1_hdn_DealDuration').val();
        document.getElementById('lblduraton_dsr').innerHTML = DealDuration;

        /*To Bind Tasks in Grid for Preview Popup*/
        GetChkValue();

        /*To Bind Risk Table in Preview Popup if it is Checked*/
        if ($('#ctl00_ContentPlaceHolder1_chkRisk').is(":checked")) {

            $("#ctl00_ContentPlaceHolder1_lblPopupRiskTbl").show();
            $("#ctl00_ContentPlaceHolder1_PopUpRiskTable").show();
            chkRiskValue();
        }
        else {

            $("#ctl00_ContentPlaceHolder1_lblPopupRiskTbl").hide();
            $("#ctl00_ContentPlaceHolder1_PopUpRiskTable").hide();
        }

    }, 0);
}


// Function Name  - GetPreviewTaskInfo
// Created By   - Apoorva-Incrust
// Created On   - 11nd NOv 2016
// Purpose      - This Function is Used To Get  Info for PrwviewTasks

function GetPreviewTaskInfo(BidId, TaskID) {
    $('#BidDSR').waitMe({
        effect: 'ios',
        bg: 'rgba(255,255,255,0.7)',
        color: '#000',
        sizeW: '',
        sizeH: '',
        source: ''
    });


    $("#previw_tbl tbody tr").remove();
    $("#Preview_Risk tbody tr").remove();

    //  alert(BidId);
    if (TaskID != '') {
        $.ajax({
            url: "./DSRPreviewAjax.aspx",
            type: "POST",
            data: { Val: BidId,
                ID: TaskID
            },
            //success: OnSuccess
            success: function (response) {
                if (response != 'fail') {
                    //  }
                    var data = $.parseJSON(response);
                    //alert("In Success");

                    // alert("id : " + data[0].ID);
                    if (data.length > 0) {

                        var tr;

                        for (var i = 0; i < data.length; i++) {
                            if (data[i].TABLE0 != null) {

                                tr = $('<tr/>');

                                tr.append("<td>" + data[i].MILESTONE_NAME + "</td>");

                                if (data[i].EMPNAME != null) {
                                    tr.append("<td>" + data[i].EMPNAME + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                tr.append("<td>" + data[i].PLANNED_START_DATE + "</td>");
                                tr.append("<td>" + data[i].PLANNED_END_DATE + "</td>");

                                if (data[i].ACTUAL_START_DATE != null) {
                                    tr.append("<td>" + data[i].ACTUAL_START_DATE + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                if (data[i].ACTUAL_END_DATE != null) {
                                    tr.append("<td>" + data[i].ACTUAL_END_DATE + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                if (data[i].PERC_COMPLETE != null) {
                                    tr.append("<td>" + data[i].PERC_COMPLETE + "</td>");
                                }
                                else if (data[i].PERC_COMPLETE == null) {
                                    tr.append("<td>" + "" + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "0" + "</td>");
                                }
                                if (data[i].TASK_DESC != null) {
                                    tr.append("<td>" + data[i].TASK_DESC + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                if (data[i].STATUS_DES != null) {
                                    tr.append("<td>" + data[i].STATUS_DES + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                if (data[i].NOTES != null) {
                                    tr.append("<td>" + data[i].NOTES + "</td>");
                                }
                                else {
                                    tr.append("<td>" + "" + "</td>");
                                }

                                $('#previw_tbl').append(tr);

                            }
                        }
                        $('#BidDSR').waitMe('hide');

                    }
                }
            }
        });
    }
}


// Function Name  - GetPreviewRiskInfo
// Created By   - Apoorva-Incrust
// Created On   - 11nd NOv 2016
// Purpose      - This Function is Used To Get  Info for PrwviewRisk

function GetPreviewRiskInfo(BidId, TaskID) {
    $('#BidDSR').waitMe({
        effect: 'ios',
        bg: 'rgba(255,255,255,0.7)',
        color: '#000',
        sizeW: '',
        sizeH: '',
        source: ''
    });
    $("#previw_tbl tbody tr").remove();
    $("#Preview_Risk tbody tr").remove();
    //alert(TaskID);
    if (TaskID == '') {
        $.ajax({
            url: "./DSRPreviewAjax.aspx",
            type: "POST",
            data: { Val: BidId,
                ID: TaskID
            },
            //success: OnSuccess
            success: function (response) {
                if (response != 'fail') {
                    //  }
                    var data = $.parseJSON(response);
                    //alert("In Success");

                    // alert("id : " + data[0].ID);
                    //  if (data[i].TABLE1 != null) {
                    var tr;
                    var SrNo = 1;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].TABLE1 != null) {
                            //tr = $("#ctl00_ContentPlaceHolder1_grdDemo").append("</tr>"); 
                            tr = $('<tr/>');
                            // tr.append("<td>" + data[i].RISK_ID + "</td>");
                            tr.append("<td>" + SrNo++ + "</td>");
                            tr.append("<td>" + data[i].RISK_DESCRIPTION + "</td>");
                            tr.append("<td>" + data[i].IDENTIFIED_BY + "</td>");
                            tr.append("<td>" + data[i].RISK_TYPE + "</td>");
                            tr.append("<td>" + data[i].COMMERCIAL_IMPACT + "</td>");
                            tr.append("<td>" + data[i].WINNABILITY_IMPACT + "</td>");
                            tr.append("<td>" + data[i].MITIGATION_PLAN + "</td>");
                            tr.append("<td>" + data[i].NOTES + "</td>");
                            tr.append("<td>" + data[i].RISK_IDENTIFIED_DATE + "</td>");
                            $('#Preview_Risk').append(tr);
                        }
                    }
                    $('#BidDSR').waitMe('hide');
                }
            }
        });
    }
}


