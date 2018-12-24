[{"Owner":"MadeByJawns","Date":"2018-05-13T20:34:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot entirely sure if this is a bug or something has changed with useBlurCloseExponentialShadowMap but after switching to 3.2_co_ when loading any scene that uses that shadow type_co_ for like a split second you can see the actual shadow map or something weird on screen?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can be recreated here by commenting in/out line 16\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0TG0TB_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0TG0TB_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you change the position/rotation of the light or some shadowGenerator settings it also changes the shape of the image that flashes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInterestingly it also happens every load on chrome_co_ but inconsistently on Firefox_co_ tested in both Windows and Ubuntu.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIncluded a screenshot_co_ still trying to figure out what it is but I honestly don_t_t know enough _lt_span class_eq__qt_ipsEmoji_qt__gt_🤔_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/1407310538_useBlurCloseExponentialShadowMapGlitch.png.16a0264a55aed568f38a54ec6b595cd8.png_qt_ data-fileid_eq__qt_18270_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_useBlurCloseExponentialShadowMap Glitch.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18270_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/1407310538_useBlurCloseExponentialShadowMapGlitch.png.16a0264a55aed568f38a54ec6b595cd8.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-14T15:35:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ton it!! it is clearly a bug! Will be fixed with next commit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MadeByJawns","Date":"2018-05-16T09:49:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome! Thanks a lot _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ I see the fix is already pushed! _lt_span class_eq__qt_ipsEmoji_qt__gt_😲_lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a quick question about releases regarding bug fixes like that... we just switched to using babylon with NPM so was wondering when that fix would be in / when those NPM builds usually get updated compared to the normal releases?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-16T17:05:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will send the alpha2 on Friday _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ (make sure to use preview version in your npm setup)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]