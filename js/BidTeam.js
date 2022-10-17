/*  Method Name - globalid
*  Created By - siddharam
*  Created On - 15 Jan 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This variable is used to get textbox id of different field.
*/
var cdg_count = 0;

var globalid = "";
var globalid2 = "";
var global_x = 0;
var global_y = 0;

//bid team domain//

$('html').click(function (e) {
    if (e.target.id != 'dynamictext_add_7')
        $('#lbcdgreviewteam1_add_7').attr('style', 'display:none');

    if ($(e.target).hasClass("serch-li")) {
        //alert("yes");
    } else {
        $(".serch-li").attr('style', 'display:none');
    }
});


/*  Method Name - function keyUP
*  Created By - siddharam 
*  Created On - 15 Jan 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/
function keyUPBidTeam(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();
    //alert(globalid);

    document.getElementById(globalid + "_hdn_cnd").value = 0;
    //alert(document.getElementById(globalid + "_hdn_cnd").value);

    if (bidmanager.length > 2) {
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
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

                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,\'' + data[i].EMPLOYEE_ID + '\');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');

                        //                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,' + data[i].EMPLOYEE_ID + ');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        //                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                    }
                }
            }
        });
    }
}




/*  Method Name - function keyUP
*  Created By - siddharam 
*  Created On - 15 Jan 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/
function keyUP(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();

    document.getElementById(globalid + "_hdn_cnd").value = 0;
    //document.getElementById(globalid + "_hdn_cnd").value = 0;
    //alert(document.getElementById(globalid + "_hdn_cnd").value);

    if (bidmanager.length > 2) {
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
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
                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,\'' + data[i].EMPLOYEE_ID + '\');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                    }
                }
            }
        });
    }
}


//This keyup event used for cdg-list purpose which is from bid details page.
function keyUP2(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    //alert(globalid);
    var id2 = $(listbox).attr("id");
    //alert(id2);
    listbox = id2;
    var bidmanager = $('#' + id).val();
    document.getElementById("hdn_cnd_" + globalid).value = 0;
    //  alert(bidmanager);

    if (bidmanager.length > 2) {
        //  alert(bidmanager);
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
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
                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid2(this,\'' + data[i].EMPLOYEE_ID + '\');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                        // alert(response);
                    }
                }
            }
        });
    }
}



/*  Method Name - function keyUP
*  Created By - siddharam 
*  Created On - 15 Jan 2016
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/
function keyUPDSR(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();

    if (bidmanager.length > 2) {
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
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
                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempiddsr(this,\'' + data[i].EMPLOYEE_ID + '\',\'' + data[i].EMAILID + '\');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                    }
                }
            }
        });
    }
}



function getempiddsr(val, uid, uemail) {
    var id = $(val).attr("id")
    //alert(uemail);
    document.getElementById(globalid).value = id;
    document.getElementById(globalid + "_hdn").value = uid + "#" + uemail;
}



// This function is used for onclick event of the list box to get EMPLOYEE_ID & text box ID purpose. 

function getempid(val, uid) {
    var id = $(val).attr("id")

    document.getElementById(globalid).value = id;
    document.getElementById(globalid + "_hdn").value = uid;
    document.getElementById(globalid + "_hdn_cnd").value = 1;
}

//This function is used for onclick event of the list box to get EMPLOYEE_ID & text box ID purpose for the cdg list purpose. 
function getempid2(val, uid) {
    var id = $(val).attr("id")
    //   alert(val);
    //  alert(uid);
    document.getElementById(globalid).value = id;
    document.getElementById("hdn_" + globalid).value = uid;

    document.getElementById("hdn_cnd_" + globalid).value = 1;
}

var col_count = 0;

var lable_arr_review = [];
var lable_arr_core = [];

//get cdg values in variable & that split and append the data.
$(window).load(function () {

    if (document.getElementById('ctl00_ContentPlaceHolder1_hiddendata') != null) {
        var data_lbl_list = document.getElementById('ctl00_ContentPlaceHolder1_hiddendata').value;

        /*this is array for the insert the label id core if data is present */
        var data = document.getElementById('ctl00_ContentPlaceHolder1_hdnCDGReviewEMPList').value;
        var data_core = document.getElementById('ctl00_ContentPlaceHolder1_hdnCDGCoreEMPList').value;
        var splt_data_core = data_core.split(',');
        for (var i = 0; i < splt_data_core.length; i++) {
            var spltstr_core = splt_data_core[i];
            var spltstr2_core = spltstr_core.split("@@");
            lable_arr_core.push(spltstr2_core[0]);
        }
        //  alert(lable_arr_core);
        /*this is array for the insert the label id */
        var splt_data = data.split(',');
        for (var i = 0; i < splt_data.length; i++) {
            var spltstr1 = splt_data[i];
            var spltstr2 = spltstr1.split("@@");
            lable_arr_review.push(spltstr2[0]);
        }
        // alert(lable_arr_review);

        if (data_lbl_list.length > 0) {
            var spltstr = data_lbl_list.split(',');

            for (var i = 0; i < spltstr.length; i++) {
                var spltstr1 = spltstr[i];
                var spltstr2 = spltstr1.split("@@");
                //alert("label name :" + spltstr2);
                var div = $("<div class='bid_team_core_padding cdg" + i + "' />");
                div.html(adddiv_core(spltstr2[1] + ' SPOC', i, spltstr2[0]));
                $("#dynamicinfo_1").append(div);
                //$("#dynamicinfo_1").append('<input class="hdn1" type="hidden" id="lable_' + spltstr2[0] + ' value=' + spltstr2[0] + '"/>'); 
            }
        }
        if (data_lbl_list.length > 0) {
            var spltstr = data_lbl_list.split(',');
            //alert(spltstr.length);
            for (var i = 0; i < spltstr.length; i++) {

                var spltstr1 = spltstr[i];
                //alert(spltstr1);
                var spltstr2 = spltstr1.split("@@");
                var div = $("<div class='bid_team_lead_padding cdg" + i + "' />");
                div.html(adddiv_review(spltstr2[1] + ' Lead', i, spltstr2[0]));
                $("#dynamicinfo").append(div);
            }
        }

    }
});


var delete_id = 0;
//Bind Review Team
function adddiv_review(label, iCnt, roll_id) {
    //alert(roll_id);
    var return_string = "";
    var emp_id = "";
    var emp_name = "";
    var dsr_view = "";
    var str_readonly = "";
    var str_chkreadonly = "";
    var label_name_chang = "";
    var check_condition = true;

    var v_readonly = document.getElementById('ctl00_ContentPlaceHolder1_hdnL2L3L4User').value;

    if (v_readonly == "1") {
        str_readonly = "readonly";
        str_chkreadonly = 'disabled = "disabled"';
    }

    var data = document.getElementById('ctl00_ContentPlaceHolder1_hdnCDGReviewEMPList').value;
    if (data.length > 0 && check_condition) {

        var spltstr = data.split(',');
        // alert(spltstr.length);
        for (var i = 0; i < spltstr.length; i++) {

            var spltstr1 = spltstr[i];
            var spltstr2 = spltstr1.split("@@");

            // alert('spltstr2 ' + spltstr2[0]);
            //alert('array exixt:'+($.inArray(roll_id, lable_arr_review) == -1));
            if (spltstr2[0] == roll_id) {
                // alert('in if review when label match' );
                emp_id = spltstr2[1];
                emp_name = spltstr2[2];
                dsr_view = spltstr2[3];
              //  alert(emp_id);
                var id = 'lbcdgreviewteam1_' + iCnt + '_' + i;
                return_string += '<div class="form-group margin-hdn-brteam-form dataa remove_app padding_btr_greyybox padding_cdg_lead_hdr">' +
            ' <label class="col-sm-4 control-label " id="' + roll_id + '" Text="Bid Quality Assessor" name="labl">' + label + '</label>' +
           ' <input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
            ' <div class="col-sm-6">' +
            '<input type="text" autocomplete="off" ' + str_readonly + ' name="txtbx" id="dynamictext_' + iCnt + '_' + i + '" class="form-control" value="' + emp_name + '"onkeyup="keyUP2(this,' + id + ')"/>' +
            ' <input type="hidden" id="hdn_dynamictext_' + iCnt + '_' + i + '" name="emp_id" value="' + emp_id + '" />' +
            ' <input class="hdn" type="hidden" id="hdn_dynamictext_org_' + iCnt + '_' + i + '" name="org_emp_id_review" value="' + emp_id + '" />' +
            ' <input type="hidden" id="hdn_cnd_dynamictext_' + iCnt + '_' + i + '" name="hdn_id" value="1" />' +
            ' <ul id="' + id + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
            '</div>';
                //alert(return_string);
                var dynamic_class = 'cdg' + iCnt;
                if (dsr_view == "1") {
                    return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' checked name="chkbx"></input> </div>';
                }
                else {
                    return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' name="chkbx"></input> </div>';
                }

                if (label_name_chang != label) {
                    delete_id++;
                    return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus bt_plus_cursor" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
                } else {
                    return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span class="glyphicon glyphicon-minus" onclick="remove_afterappend(' + delete_id++ + ',this);"></span></div>';
                }

                label_name_chang = label;
                return_string = return_string + '</div>';
                check_condition = false;
            }
            //            else if ($.inArray(roll_id, lable_arr_review) == -1) {

            //        //  alert('in review not in arry');
            //                            var id = 'lbcdgreviewteam1_' + iCnt + '_' + i;
            //                            return_string += '<div class="form-group margin-hdn-brteam-form dataa remove_app" style="padding-top: 10px;">' +
            //                        ' <label class="col-sm-4 control-label " id="' + roll_id + '" Text="Bid Quality Assessor" name="labl">' + label + '</label>' +
            //                       ' <input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
            //                        ' <div class="col-sm-6">' +
            //                        '<input type="text" autocomplete="off" ' + str_readonly + ' name="txtbx" id="dynamictext_' + iCnt + '_' + i + '" class="form-control" value="' + emp_name + '"onkeyup="keyUP2(this,' + id + ')"/>' +
            //                        ' <input type="hidden" id="hdn_dynamictext_' + iCnt + '_' + i + '" name="emp_id" value="' + emp_id + '" />' +
            //                        ' <input class="hdn" type="hidden" id="hdn_dynamictext_org_' + iCnt + '_' + i + '" name="org_emp_id_review" value="' + emp_id + '" />' +
            //                        ' <input type="hidden" id="hdn_cnd_dynamictext_' + iCnt + '_' + i + '" name="hdn_id" value="1" />' +
            //                        ' <ul id="' + id + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
            //                        '</div>';
            //                            //alert(return_string);
            //                            var dynamic_class = 'cdg' + iCnt;
            //                            if (dsr_view == "1") {
            //                                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' checked name="chkbx"></input> </div>';
            //                                //  return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            //                            }
            //                            else {
            //                                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' name="chkbx"></input> </div>';
            //                                // return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            //                            }

            //                            if (label_name_chang != label) {
            //                                delete_id++;
            //                                return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            //                            } else {
            //                                return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span class="glyphicon glyphicon-minus" onclick="remove_afterappend(' + delete_id++ + ',this);"></span></div>';
            //                            }
            //                            label_name_chang = label;
            //                            return_string = return_string + '</div>';
            //                        }
        }

        if ($.inArray(roll_id, lable_arr_review) == -1) {

            //  alert('in review not in arry');
            var id = 'lbcdgreviewteam1_' + iCnt + '_' + i;
            return_string += '<div class="form-group margin-hdn-brteam-form dataa remove_app">' +
                        ' <label class="col-sm-4 control-label " id="' + roll_id + '" Text="Bid Quality Assessor" name="labl">' + label + '</label>' +
                       ' <input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
                        ' <div class="col-sm-6">' +
                        '<input type="text" autocomplete="off" ' + str_readonly + ' name="txtbx" id="dynamictext_' + iCnt + '_' + i + '" class="form-control" value="' + emp_name + '"onkeyup="keyUP2(this,' + id + ')"/>' +
                        ' <input type="hidden" id="hdn_dynamictext_' + iCnt + '_' + i + '" name="emp_id" value="' + emp_id + '" />' +
                        ' <input class="hdn" type="hidden" id="hdn_dynamictext_org_' + iCnt + '_' + i + '" name="org_emp_id_review" value="' + emp_id + '" />' +
                        ' <input type="hidden" id="hdn_cnd_dynamictext_' + iCnt + '_' + i + '" name="hdn_id" value="1" />' +
                        ' <ul id="' + id + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
                        '</div>';
            //alert(return_string);
            var dynamic_class = 'cdg' + iCnt;
            if (dsr_view == "1") {
                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' checked name="chkbx"></input> </div>';
                //  return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            }
            else {
                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding"><input type="checkbox"  ' + str_chkreadonly + ' name="chkbx"></input> </div>';
                // return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            }

            if (label_name_chang != label) {
                delete_id++;
                return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span id="add_rows_' + str_chkreadonly + '" class="glyphicon glyphicon-plus bt_plus_cursor" onclick="addRows(\'' + dynamic_class + '\',\'' + label + '\',\'' + roll_id + '\');"></span></div>';
            } else {
                return_string = return_string + '<div class="col-sm-1" style="margin-left: 19px;margin-top: -18px;"><span class="glyphicon glyphicon-minus bt_plus_cursor" onclick="remove_afterappend(' + delete_id++ + ',this);"></span></div>';
            }
            label_name_chang = label;
            return_string = return_string + '</div>';
        }
    }
    return_string = return_string + '</div>';
    return return_string;
}

//Bind Core CDG Team
function adddiv_core(label, iCnt, roll_id) {

    var return_string = '';
    var emp_id = "";
    var emp_name = "";
    var dsr_view = "";
    var str_readonly = "";
    var str_chkreadonly = "";
    var check_condition = true;

    var v_readonly = document.getElementById('ctl00_ContentPlaceHolder1_hdnL2L3L4User').value;

    if (v_readonly == "1") {
        str_readonly = "readonly";
        str_chkreadonly = 'disabled = "disabled"';
    }

    var data = document.getElementById('ctl00_ContentPlaceHolder1_hdnCDGCoreEMPList').value;

    if (data.length > 0) {
        var spltstr = data.split(',');
        //alert('employee exist length : '+spltstr.length);
        //col_count = spltstr.length;
        for (var i = 0; i < spltstr.length; i++) {
            // alert(i);
            var spltstr1 = spltstr[i];
            var spltstr2 = spltstr1.split("@@");

            if (spltstr2[0] == roll_id) {
                emp_id = spltstr2[1];
                emp_name = spltstr2[2];
                dsr_view = spltstr2[3];

                var id = 'lbcdgcoreteam2_' + iCnt + '_' + i;
                return_string += '<div class="form-group margin-hdn-bcteam-form dataaa remove_app' + global_y++ + '">' +
            ' <label class="col-sm-4 control-label userlabel" id="lbl" Text="Bid Quality Assessor" name="labl">' + label + '</label><span class="asterisk_input_bt"></span>' +
            ' <input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
            ' <div class="col-sm-6">' +
            ' <input type="text" autocomplete="off" ' + str_readonly + ' name="txtbx" id="dynamictext2_' + iCnt + '_' + i + '" class="form-control" value="' + emp_name + '"onkeyup="keyUP2(this,' + id + ')"/>' +
            ' <input class="hdn" type="hidden" id="hdn_dynamictext2_' + iCnt + '_' + i + '" name="emp_id" value="' + emp_id + '" />' +
            ' <input class="hdn" type="hidden" id="hdn_dynamictext2_org_' + iCnt + '_' + i + '" name="org_emp_id" value="' + emp_id + '" />' +
            ' <input class="hdn" type="hidden" id="hdn_cnd_dynamictext2_' + iCnt + '_' + i + '" name="hdn_id" value="1" />' +
            ' <ul id="' + id + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
            ' </div>';

                if (dsr_view == "1") {
                    return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding "><input class="margin-hdn-bcteam-chk" type="checkbox" ' + str_chkreadonly + ' checked name="chkbx"></input> </div>';
                }
                else {
                    return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding "><input class="margin-hdn-bcteam-chk" type="checkbox" ' + str_chkreadonly + '  name="chkbx"></input> </div>';
                }
                check_condition = false;
            }

            return_string = return_string + '</div></div>';
        }


        if ($.inArray(roll_id, lable_arr_core) == -1) {
            var id = 'lbcdgcoreteam2_' + iCnt + '_' + i;
            return_string += '<div class="form-group margin-hdn-bcteam-form dataaa remove_app' + global_y++ + '">' +
                        ' <label class="col-sm-4 control-label userlabel" id="lbl" Text="Bid Quality Assessor" name="labl">' + label + '</label><span class="asterisk_input_bt"></span>' +
                        ' <input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
                        ' <div class="col-sm-6">' +
                        ' <input type="text" autocomplete="off" ' + str_readonly + ' name="txtbx" id="dynamictext2_' + iCnt + '_' + i + '" class="form-control" value="' + emp_name + '"onkeyup="keyUP2(this,' + id + ')"/>' +
                        ' <input class="hdn" type="hidden" id="hdn_dynamictext2_' + iCnt + '_' + i + '" name="emp_id" value="' + emp_id + '" />' +
                        ' <input class="hdn" type="hidden" id="hdn_dynamictext2_org_' + iCnt + '_' + i + '" name="org_emp_id" value="' + emp_id + '" />' +
                        ' <input class="hdn" type="hidden" id="hdn_cnd_dynamictext2_' + iCnt + '_' + i + '" name="hdn_id" value="1" />' +
                        ' <ul id="' + id + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
                        ' </div>';
            //alert(dsr_view);
            if (dsr_view == "1") {
                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding "><input class="margin-hdn-bcteam-chk" type="checkbox" ' + str_chkreadonly + ' checked name="chkbx"></input> </div>';
            }
            else {
                return_string = return_string + ' <div class="col-sm-1 checkbox  chb-padding "><input class="margin-hdn-bcteam-chk" type="checkbox" ' + str_chkreadonly + '  name="chkbx"></input> </div>';
            }
            return_string = return_string + '</div></div>';
        }
    }
    return_string = return_string + '</div>';
    return return_string;
}




//on save button get the data from js to cs page for cdg_core team & cdg_review team:
//on save button get the data from js to cs page for cdg_core team & cdg_review team:
function ConcateData() {

    //array for check the validation is this employee is for same cdg?
    var label;
    var temp_arr = [];

    var label_lead;
    var temp_arr_lead = [];

    var all_cdg_SPOC_filled = 0;
    var cdg_spoc = "";
    var ele = $('.dataa');
    // alert(ele.length);
    var last = "";

    for (var i = 0; i < ele.length; i++) {
        var V_cdgreview = $(ele[i]).find("input[name='roll_id']");
        var emp_id_review = $(ele[i]).find("input[name='emp_id']");

        var emp_check_review = $(ele[i]).find("input[name='chkbx']").is(':checked');
        var emp_review_org = $(ele[i]).find("input[name='org_emp_id_review']").val();
        //alert(emp_review_org);
        if (emp_check_review) {
            emp_check_review = 1;

            if ($(ele[i]).find("input[name='txtbx']").val().trim() == "") {
                $(ele[i]).find("input[name='txtbx']").css('border-color', 'red');
                all_cdg_SPOC_filled = 1;
            }
        }
        else {
            emp_check_review = 0;
            $(ele[i]).find("input[name='txtbx']").css('border-color', 'lightgrey');
        }
        var cdg_reviewdata = "";

        if ($(ele[i]).find("input[name='txtbx']").val().trim() != "" && $(ele[i]).find("input[name='hdn_id']").val() == 0) {

            $(ele[i]).find("input[name='txtbx']").css('border-color', 'red');
           
            all_cdg_SPOC_filled = 2;
        }
        //        if ($(ele[i]).find("input[name='txtbx']").val().trim() != "" && $(ele[i]).find("input[name='hdn_id']").val() != 0) {
        //            cdg_reviewdata = "ROLE_ID" + "^@|" + 23 + "#" + "CDG_REF_ID" + "^@|" + String(V_cdgreview.val()) + "#" + "EMPLOYEE_ID" + "^@|" + String(emp_id_review.val()) + "#" + "DSR_VIEW" + "^@|" + String(emp_check_review) + "#" + "ORG_EMPLOYEE_ID" + "^@|" + String(emp_review_org);
        //            document.getElementById('ctl00_ContentPlaceHolder1_hdn_emp_list_cdg_review').value += $(ele[i]).find("input[name='org_emp_id_review']").val() + "$$";
        //        }

        if ((($(ele[i]).find("input[name='txtbx']").val().trim() == "" && $(ele[i]).find("input[name='hdn_id']").val() == 1)) || (($(ele[i]).find("input[name='txtbx']").val().trim() != "" && $(ele[i]).find("input[name='hdn_id']").val() != 0))) {

            cdg_reviewdata = "ROLE_ID" + "^@|" + 23 + "#" + "CDG_REF_ID" + "^@|" + String(V_cdgreview.val()) + "#" + "EMPLOYEE_ID" + "^@|" + String(emp_id_review.val()) + "#" + "DSR_VIEW" + "^@|" + String(emp_check_review) + "#" + "ORG_EMPLOYEE_ID" + "^@|" + String(emp_review_org);
            document.getElementById('ctl00_ContentPlaceHolder1_hdn_emp_list_cdg_review').value += $(ele[i]).find("input[name='org_emp_id_review']").val() + "$$";

            // validation for if employee is allready exist then give error msg to // 
            if (label_lead == '' || label_lead == undefined || label_lead == null) {
                label_lead = V_cdgreview.val();
                //  alert(label_lead);
            }
            if (label_lead != '' && label_lead != V_cdgreview.val()) {
                label_lead = V_cdgreview.val();
                temp_arr_lead = [];
            }
            // alert('label ' + label);

            if (label_lead != '' && label_lead == V_cdgreview.val()) {

                if ($.inArray(emp_id_review.val(), temp_arr_lead) == -1) {
                    if (emp_id_review.val() != null && emp_id_review.val() != '' && emp_id_review.val() != '') {
                        temp_arr_lead.push(emp_id_review.val());
                    }
                }
                else {
                    // alert('error');
                    all_cdg_SPOC_filled = 6;
                }

            }
            // alert(temp_arr_lead.length);
            // validation for if employee is allready exist then give error msg to //
        }

        // For review team cdg check task owner
        if ($(ele[i]).find("input[name='txtbx']").val().trim() == "" && $(ele[i]).find("input[name='org_emp_id_review']").val() != "") {
            document.getElementById('ctl00_ContentPlaceHolder1_hdn_review_emp_exist').value += $(ele[i]).find("input[name='org_emp_id_review']").val() + "$$";
        }
        if (i == 0) {
            last = cdg_reviewdata;
        } else {
            last = last + ',' + cdg_reviewdata;
        }
    }

    //alert(last);

    var cdg_review = last;
    var ele2 = $('.dataaa');
    var last1 = "";
    // alert(ele2.length);
    var cdg_coredata = "";

    for (var i = 0; i < ele2.length; i++) {
        var V_cdgcore = $(ele2[i]).find("input[name='roll_id']");
        var emp_id_core = $(ele2[i]).find("input[name='emp_id']");
        var emp_check_core = $(ele2[i]).find("input[name='chkbx']").is(':checked');
        var org_emp_id_core = $(ele2[i]).find("input[name='org_emp_id']");
        //alert(V_cdgreview.val());

        if (emp_check_core)
            emp_check_core = 1;
        else
            emp_check_core = 0;

        if ($(ele2[i]).find("input[name='txtbx']").val().trim() != "") {
            cdg_coredata = "ROLE_ID" + "^@|" + 22 + "#" + "CDG_REF_ID" + "^@|" + String(V_cdgcore.val()) + "#" + "EMPLOYEE_ID" + "^@|" + String(emp_id_core.val()) + "#" + "DSR_VIEW" + "^@|" + String(emp_check_core) + "#" + "ORG_EMPLOYEE_ID" + "^@|" + String(org_emp_id_core.val());
            $(ele2[i]).find("input[name='txtbx']").css('border-color', 'lightgrey');

        }
        else {
        /*Start 07th Feb Changes */
            if ($(ele2[i]).find("input[name='txtbx']").attr('readonly') == 'readonly') {

                //alert("foo");
                all_cdg_SPOC_filled = 0;
            }
            else {
                $(ele2[i]).find("input[name='txtbx']").css('border-color', 'red');
                all_cdg_SPOC_filled = 1;
            }
            /*End 07th Feb Changes */
        }

        if ($(ele2[i]).find("input[name='txtbx']").val().trim() != "" && $(ele2[i]).find("input[name='hdn_id']").val() != 0) {
            cdg_coredata = "ROLE_ID" + "^@|" + 22 + "#" + "CDG_REF_ID" + "^@|" + String(V_cdgcore.val()) + "#" + "EMPLOYEE_ID" + "^@|" + String(emp_id_core.val()) + "#" + "DSR_VIEW" + "^@|" + String(emp_check_core) + "#" + "ORG_EMPLOYEE_ID" + "^@|" + String(org_emp_id_core.val());
            $(ele2[i]).find("input[name='txtbx']").css('border-color', 'lightgrey');

            // validation for if employee is allready exist then give error msg to // 
            if (label == '' || label == undefined || label == null) {
                label = V_cdgcore.val();
            }
            if (label != '' && label != V_cdgcore.val()) {
                label = V_cdgcore.val();
                temp_arr = [];
            }
            //alert('label ' + label);
            //alert(emp_id_core.val());

            if (label != '' && label == V_cdgcore.val()) {
                if ($.inArray(emp_id_core.val(), temp_arr) == -1) {
                    temp_arr.push(emp_id_core.val());
                }
                else {
                    all_cdg_SPOC_filled = 5;
                }
            }
            // validation for if employee is allready exist then give error msg to // 
        }
        else {
            /*Start 07th Feb Changes */
            if ($(ele2[i]).find("input[name='txtbx']").attr('readonly') == 'readonly') {

               // alert("foo");
                all_cdg_SPOC_filled = 0;
            }
            else {
                $(ele2[i]).find("input[name='txtbx']").css('border-color', 'red');
                all_cdg_SPOC_filled = 3;
            }
            /*End 07th Feb Changes */
        }
        //To Get Core Team Employees
        document.getElementById('ctl00_ContentPlaceHolder1_hdn_emp_list_cdg_core').value += $(ele2[i]).find("input[name='org_emp_id']").val() + "$$";
        //
        if (i == 0) {
            last1 = cdg_coredata;
        } else {
            last1 = last1 + ',' + cdg_coredata;
        }
    }
    var cdg_core = last1;



    if (cdg_review.trim() == "")
        cdg_review = "##";
    //alert(cdg_review);
    var cdg_data = cdg_review + '&&' + cdg_core;
    document.getElementById('ctl00_ContentPlaceHolder1_hdn_cdg_list').value = cdg_data;

    return all_cdg_SPOC_filled;
}

/*bid team cdg assign for multiple employee */

function addRows(add_cdg, label_name, roll_id) {
    var ele = $('.' + add_cdg);

    var str_cdg = label_name.replace("Lead", "");

    for (var i = 0; i < ele.length; i++) {

        var html_str = '<div class="dataaa  remove' + cdg_count + '">';
        html_str += '<div class="form-group margin-hdn-bcteam-form">';
        html_str += '<label class="col-sm-4 control-label userlabel" id="' + roll_id + '" text="" name="labl">' + str_cdg + ' SPOC</label>';
        html_str += '<span class="asterisk_input_bt"></span>';
        html_str += '<input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '">';
        html_str += '<div class="col-sm-6"><input type="text" autocomplete="off" name="txtbx" id="dynamictext2_add_' + cdg_count + '" class="form-control" onkeyup="keyUP2(this,lbcdgcoreteam2_add_' + cdg_count + ')">';
        html_str += '<input class="hdn" type="hidden" id="hdn_dynamictext2_add_' + cdg_count + '" name="emp_id" value="">';
        html_str += '<input class="hdn" type="hidden" id="hdn_dynamictext2_add_org_' + cdg_count + '" name="org_emp_id" value="">';
        html_str += '<input class="hdn" type="hidden" id="hdn_cnd_dynamictext2_add_' + cdg_count + '" name="hdn_id" value="">';
        html_str += '<ul id="lbcdgcoreteam2_add_' + cdg_count + '" style="display:none" class="serch-li"></ul>';
        html_str += '</div><div class="col-sm-1 checkbox  chb-padding ">';
        html_str += '<input class="margin-hdn-bcteam-chk" type="checkbox" name="chkbx"></div></div></div>';
        //  alert(html_str);

        var html_str_lead = '<div class="bid_team_dataa_lead dataa remove' + cdg_count + '" >' +
            '<div class="form-group margin-hdn-brteam-form">' +
            '<label class="col-sm-4 control-label " id="' + roll_id + '" Text="" name="labl">' + label_name + '</label>' +
            '<input class="hdn2" type="hidden" name="roll_id" value="' + roll_id + '"/>' +
            ' <div class="col-sm-6">' +
            '<input type="text" autocomplete="off" name="txtbx" id="dynamictext_add_' + cdg_count + '" class="form-control" value="" onkeyup="keyUP2(this,lbcdgreviewteam1_add_' + cdg_count + ')"/>' +
            ' <input type="hidden" id="hdn_dynamictext_add_' + cdg_count + '" name="emp_id" value="" />' +
            ' <input class="hdn" type="hidden" id="hdn_dynamictext_org_add_' + cdg_count + '" name="org_emp_id_review" value="" />' +
            ' <input type="hidden" id="hdn_cnd_dynamictext_add_' + cdg_count + '" name="hdn_id" value="1" />' +
            ' <ul id="lbcdgreviewteam1_add_' + cdg_count + '" style="display: none; background-color: #f8fcee; list-style-type: none" class="serch-li"> </ul>' +
            '</div><div class="col-sm-1 checkbox  chb-padding "><input class="margin-hdn-bcteam-chk" type="checkbox" name="chkbx"></input> </div>' +
           ' <div class="col-sm-1" style="margin-left: 19px;margin-top:-19px;"><span class="glyphicon glyphicon-minus bt_plus_cursor" onclick="remove_fu(\'' + cdg_count + '\')";></span></div></div>';

        if (i == 0) {
            $(ele[i]).after(html_str);
            html_str = "";
        }
        else if (i == 1) {
            $(ele[i]).after(html_str_lead);
            html_str_lead = "";
        }
    }

    cdg_count++;
}

/*end for the cdg*/

/*remove at the time of add new row*/
function remove_fu(i) {
    $('.remove' + i).remove();
}

/*after bind the row delete functionality*/
function remove_afterappend(i, obj) {

    //alert(i);
    $('.remove_app' + (i)).remove();
    $(obj).parent().closest('.remove_app').remove();

    // $('.remove_app' + i).remove();
    // $('.remove_app' + (i-2)).remove();
}



/*  Method Name - function keyUP
*  Created By - Priyanka Nikam
*  Created On - 05 Jul 2017
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the BidTeamSearchPeople.aspx page & listbox is used to get all listbox id purpose.    
*/

function KeyUpEMP_BG(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();
    //alert(globalid);

    document.getElementById(globalid + "_hdn_cnd").value = 0;
    //alert(document.getElementById(globalid + "_hdn_cnd").value);

    if (bidmanager.length > 2) {
        $.ajax({
            url: "./BidTeamAjaxCall.aspx",
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

                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="ShowEMP_BG(this,\'' + data[i].EMPLOYEE_ID + '\',\'' + data[i].EMAILID + '\',\'' + data[i].EMPTITLE + '\' );">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');

                        //  $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 105px;cursor:pointer;" id="' + data[i].EMPNAME + '" onclick="getempid(this,' + data[i].EMPLOYEE_ID + ');">' + data[i].EMPNAME + " (" + data[i].EMPLOYEE_ID + ")" + '</br>' + data[i].EMAILID + '</li>');
                        //  $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                    }
                }
            }
        });
    }
}




function ShowEMP_BG(val, uid, uemail,empDesg) {  
    var id = $(val).attr("id")
   
    document.getElementById(globalid).value = id;
    document.getElementById(globalid + "_hdn").value = uid;
    document.getElementById(globalid + "_hdn_cnd").value = 1;
    document.getElementById(globalid + "_Email").value = uemail;
    
    document.getElementById(globalid + "_hdn_Email").value = uemail;
    document.getElementById(globalid + "_ID").value = uid;
    document.getElementById(globalid + "_Desg").value = empDesg;
  
    document.getElementById(globalid + "_Designation").value = empDesg;

}




/*  Method Name - function keyUP Account
*  Created By - Priyanka Nikam
*  Created On - 09 Sep 2017
*  Modified By - 
*  Modified On - 
*  Purpose - This function is used to get ajax call to the serach account
*/

function KeyUpAccount(ele, listbox) {
    var id = $(ele).attr("id");
    globalid = id;
    var bidmanager = $('#' + id).val();

    document.getElementById(globalid + "_hdn_cnd").value = 0;

    if (bidmanager.length > 2) {
       
        $.ajax({
            url: "./BidAccountAjaxCall.aspx",
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

                        $('#' + listbox).append('<li class="inner-li ' + class1 + '" style="height: 95px;cursor:pointer;" id="' + data[i].ACCOUNT_NAME + '" onclick="ShowAccount(this,\'' + data[i].ID + '\' );">' + data[i].ACCOUNT_NAME + " (" + data[i].ID + ")" + '</li>');
                        $('#' + listbox).attr('style', 'background-color: #f8fcee;');
                    }
                }
            }
        });
    }
}


function ShowAccount(val, uid) {
    var id = $(val).attr("id")
    document.getElementById(globalid).value = id;
    document.getElementById(globalid + "_hdn").value = uid;
    document.getElementById(globalid + "_hdn_cnd").value = 1;      

}