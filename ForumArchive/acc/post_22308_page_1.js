[{"Owner":"Brunex92","Date":"2016-05-02T16:43:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey_co__lt_br /_gt__lt_br /_gt_\n\tSo_co_ is there any way of the camera zoom don_t_t invert the canvas when I reach the (0_co_ 0_co_ 0)?_lt_br /_gt_\n\tI need to go deeper in the canvas to look at objects far away from the origin\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-02T19:08:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI assume you are using an ArcRotateCamera_co_ correct? try using camera. _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_16.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_allowUpsideDown _lt_/span_gt_ _eq_ false\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-02T19:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127070_qt_ data-ipsquote-contentid_eq__qt_22308_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462216083_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHey\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI assume you are using an ArcRotateCamera_co_ correct? try using camera. _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_16.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_allowUpsideDown _lt_/span_gt_ _eq_ false\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYea_co_ I_t_m using ArcRotateCamera_co_ allowUpsideDown won_t_t work_co_ still the same\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-02T20:20:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcan you provide a playground repro?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-03T01:20:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#16_lt_/a_gt__lt_br /_gt_\n\tBasically_co_ when I zoom in passing the center ball I want to keep going in\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-03T16:44:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk then just set the camera center farther than your mesh (There is no zoom per se but a radius_dd_ when you zoom you reduce the radius)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that you should just set the lowerRadiusLimit to 1 or even 0.1 if you really want to go closer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA negative radius means that you went beyond the center of the camera\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-03T17:02:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI understand_co_ but this still don_t_t solve my problem_lt_br /_gt__lt_br /_gt_\n\tI want to reach that sphere that is far away from the center by _t_zooming in_t__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tputting lowerRadiusLimit will only limit the radius of the camera_co_ when I actually want to go deeper_co_ if there is any way of doing this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-03T17:21:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep by setting the camera target on the sphere_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#18_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-03T17:23:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo other way?_lt_br /_gt_\n\tthere will be lots of spheres and cylinders what I really needed wat to pass by the center and keep going _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-03T18:19:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not sure exactly why you need to zoom past the object you are focusing on.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you just do something like this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick on the spheres and zoom.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-03T18:21:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat would kinda help_co_ but some objects will be really far away_co_ almost unclickable\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-03T22:47:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tperhaps you don_sm_t need a ArcRotateCamera? A freeCamera could do it easily\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-04T18:48:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBut how do I zoom in with the scroll?_lt_br /_gt_\n\tThe arcRotate was a good option because I need to rotate arond the center\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-04T21:33:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_ what you could do_co_ is to use arcRotate for your grid area_co_ and when your zoom hits something like 0.1_co_ switch to a freeCamera_co_ (update it_t_s position &amp_sm_ path to same as arcRotate_co_ pre-switching) and capture mouse scrolling_co_ so the camera moves forward when scrolling in_co_ and moves backwards when scrolling out and when you reach your grid area again_co_ reset to arcRotate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother option could be_co_ when zoom hits 0.1_co_ again_co_ capture mouse scrollng_co_ but instead of zooming_co_ move the arcRotate_t_s target position in the direction you_t_re _qt_zooming_qt_ and when you go back again_co_ reset. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-05T18:35:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ I think that would make the visualization kinda different changing cameras that way_co_ i was looking for something like the good old gluPerspective from the old versions of OpenGL using C++\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-05T18:53:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_ i_t_m not sure what you mean_co_ or perhaps you misunderstood me_co_ the idea was to have two cameras_co_ at the grid area arcRotate is set as the active_co_ but_co_ you still update freeCamera_t_s position &amp_sm_ direction to constantly match the arcRotate_co_ so when you switch to freeCamera nothing else really changes for the user_co_ but you would ofc lose the rotational _qt_benefits_qt_ which arcRotate have.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut anyhow_co_ option two_co_ with moving the arcRotate_t_s target position would probably be the best choice between my two ideas_co_ unless you_t_re up for doing a bit of customization to engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s quite a tricky issue^^\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-05T19:04:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_Oh I got it now_co__lt_br /_gt__lt_br /_gt_\n\tSo for the first option is that I_t_ve never worked with two cameras in any 3D application_co_ and the rotational benefits from arcRotate are really necessary for me_lt_br /_gt_\n\tFor the second option_co_ how can i move the target position?_lt_br /_gt__lt_br /_gt_\n\tI don_t_t intend to modificate the engine at all\n_lt_/p_gt_\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-05-05T19_dd_15_dd_14Z_t_ title_eq__t_05/05/2016 07_dd_15  PM_t_ data-short_eq__t_2 yr_t__gt_May 5_co_ 2016_lt_/time_gt_ by Brunex92_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_misspelling\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-05T19:42:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tarcRotateCamera rotates around a target_co_ _qt_camera.target_qt_ (Vector3_co_ also camera.target.x  / y or z works for specific numbers )_co_ you would need to calculate the direction you_t_re zooming and then calculate the next position_co_ and update the target location acordingly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-05T19:47:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ So basically I have to update the target everytime I zoom in_co_ now how do I update it?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-05T20:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt__lt_br /_gt_\n\tcamera.setTarget _eq_ babylon vector3_sm_  should do it_co_ but it_t_s some complicated stuff^^\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a simple playground to show the idea of it(the move direction is fixed)_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt needs a lot of work_co_ smoothing out movement_co_ calculating correct movement_co_ disabling the camera_t_s actual zoom when it shouldn_t_t be enabled(when zoomed all the way in and moved away from grid)_co_ etc etc.. as i said_co_ it_t_s a complicated issue _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__co_ many variables to think about.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgood luck\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-06T15:11:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this what you had in mind?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#22_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-06T15:26:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tor this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#23_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Brunex92","Date":"2016-05-06T16:07:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127568_qt_ data-ipsquote-contentid_eq__qt_22308_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462547502_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t54 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21317_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21317-brunex92/_qt_ rel_eq__qt__qt__gt_@Brunex92_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIs this what you had in mind?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KNMZ0%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KNMZ0#22_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ This one looks exactly what I needed! Thanks a lot!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-06T16:25:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ could this be added as an option to arcRotateCamera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you look at the PG_co_ I just added lines 29 - 39.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-06T23:15:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey...I don_t_t really see the gain versus using lowerRadiusLimit\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]