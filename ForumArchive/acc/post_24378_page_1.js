[{"Owner":"DezOnlyOne","Date":"2016-08-09T21:05:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tis there a simple way to limit the amount of rotation of a mesh? I have a throttle in my project and I have it setup so that I can click and drag it to rotate the lever on the x axis(Thanks to Wingnut and others in this forum).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to limit the amount that it can be rotated no matter how much the drag_co_ but I am getting odd results. Is there a way that I can use a clamp to lock the rotation into a certain angle? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS... to move the throttle_co_ you click and drag from the cylinder objects on the left or right\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DHIAE%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DHIAE#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-10T14:47:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello \n_lt_/p_gt_\n\n_lt_p_gt_\n\twhy not jsut adding a function to check rotation.x after setting it up? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike_dd_ if rotation.x &gt_sm_ Math.PI { rotation.x _eq_ Math.PI}\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-10T17:07:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the suggestion. I did try that. he odd results are what I was talking about. There is a flickering and the rotation is reset when you click on the throttle again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DHIAE%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DHIAE#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 142-161\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var rotCfg _eq_ {\n    min_dd_ -3_co_\n    max_dd_ 0\n}\n\t\t\nif (currentMesh.name _eq__eq__eq_ _t_throttle_left_do_t_) {\t\t\t\n\tif (throttleLeft.rotation.x &lt_sm_ rotCfg.min) {\n\t\tthrottleLeft.rotation.x _eq_ rotCfg.min_sm_\n\t\tonPointerUp()_sm_\n\t} else if (throttleLeft.rotation.x &gt_sm_ rotCfg.max) {\n\t\tthrottleLeft.rotation.x _eq_ rotCfg.max_sm_\n\t\tonPointerUp()_sm_\n\t} else {\n\t\tvar newRotation _eq_ rotationInit - dragDiff.y / 10_sm_\n\t\tthrottleLeft.rotation.x _eq_ -newRotation_sm_\n\t}\n}\nif (currentMesh.name _eq__eq__eq_ _t_throttle_right_do_t_) {\t\t\t\n\tif (throttleRight.rotation.x &lt_sm_ rotCfg.min) {\n\t\tthrottleRight.rotation.x _eq_ rotCfg.min_sm_\n\t\tonPointerUp()_sm_\n\t} else if (throttleRight.rotation.x &gt_sm_ rotCfg.max) {\n\t\tthrottleRight.rotation.x _eq_ rotCfg.max_sm_\n\t\tonPointerUp()_sm_\n\t} else {\n\t\tvar newRotation _eq_ rotationInit - dragDiff.y / 10_sm_\n\t\tthrottleRight.rotation.x _eq_ -newRotation_sm_\n\t}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-10T17:31:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DHIAE%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DHIAE#3_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-10T17:37:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139463_qt_ data-ipsquote-contentid_eq__qt_24378_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470850281_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DHIAE%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DHIAE#3_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]