[{"Owner":"Tom Krueger","Date":"2015-09-28T23:53:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to make a health bar follow a mesh around the screen.  I was trying to make it work using HTML element.  The trouble I_t_m running into is with the proper values for top and left of the element.  I was taking the mesh.position.x and mapping it to left.  The problem from what I gather is that the html elements left is zero at the left edge of the screen but the position.x is zero in the middle of the screen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My questions_dd__lt_/p_gt__lt_p_gt_1) Is this the right approach to use html elements to travel along with a mesh such as a player or asteroid?_lt_/p_gt__lt_p_gt_2) Is there a standard technique for calculating the html elements position from a mesh position?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks much_co__lt_/p_gt__lt_p_gt_Tom_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-29T00:39:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not documented _co_ but discussed before_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14637-translating-a-meshs-vertices-to-screen-coords/_qt__gt_http_dd_//www.html5gamedevs.com/topic/14637-translating-a-meshs-vertices-to-screen-coords/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-09-29T06:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ You should use a sprite or dynamic texture for that directly injected into the 3D canvas. You won_t_t be able to properly use a HTML element for that._lt_/p_gt__lt_p_gt_ DynamicTexture_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2/DynamicTexture_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2/DynamicTexture_lt_/a_gt_  _lt_/p_gt__lt_p_gt_ Check also our MVA course_co_ there is a chapter where deltakosh is demoing exactly what you_t_d like to do with dynamic texture._lt_/p_gt__lt_p_gt_David _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-29T10:00:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98603_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17507_qt_ data-ipsquote-username_eq__qt_davrous_qt_ data-cite_eq__qt_davrous_qt_ data-ipsquote-timestamp_eq__qt_1443507972_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ You won_t_t be able to properly use a HTML element for that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What would be the downside?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YES9W_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YES9W#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tom Krueger","Date":"2015-09-29T12:11:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for responding._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Convergence_co_ thanks for the sample.  I_t_m sure I can get this working now using html elements._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Davrous_co_ thanks for the pointer on an alternate way to solve the problem using dynamic textures.  Couple questions_dd__lt_/p_gt__lt_p_gt_1) What would you say are the advantages of using Dynamic Textures for this?_lt_/p_gt__lt_p_gt_2) Thanks for the pointer to the MVA Course.  That looks to be great.  I have a couple hours later today to work on this.  If you would know which chapter this is in_co_ I would appreciate a knowing.  I promise to post the dynamic texture solution here so others can easily use it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Others_co_ Here is a link to the MVA Course._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.microsoftvirtualacademy.com/en-US/training-courses/introduction-to-webgl-3d-with-html5-and-babylon-js-8421_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.microsoftvirtualacademy.com/en-US/training-courses/introduction-to-webgl-3d-with-html5-and-babylon-js-8421_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks much_co__lt_/p_gt__lt_p_gt_Tom_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-09-29T13:59:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98616_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17507_qt_ data-ipsquote-username_eq__qt_Convergence_qt_ data-cite_eq__qt_Convergence_qt_ data-ipsquote-timestamp_eq__qt_1443520823_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_What would be the downside?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YES9W_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YES9W#1_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s very hard and sometime impossible to synchronize HTML elements on top of the 3D canvas for various reasons. You will fall also in the problem of handling the various resolutions_co_ zooming_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Much easier to do it directly inside the canvas using Babylon.js to handle positions &amp_sm_ 3D._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-09-29T14:03:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The DynamicTexture sample is there_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/04._Understanding_Materials_and_Inputs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/04._Understanding_Materials_and_Inputs_lt_/a_gt_ (MVA videos are also on on documentation site _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_) around 36_dd_00 min_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-09-29T15:57:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys!  Hey Tom... you might consider using a bar-graph for your health meter... and no text.  Not only do you get automatic language translation with a bar graph_co_ but it_t_s somewhat easy to do.... with two planes.  The front plane is scaled on x-axis... per the amount of health.  Here_t_s a badly-coded example._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I used grounds instead of planes... but you can adjust to your liking.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WRH6X%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WRH6X#7_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just a thought.  Party on._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-09-29T16:36:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98616_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17507_qt_ data-ipsquote-username_eq__qt_Convergence_qt_ data-cite_eq__qt_Convergence_qt_ data-ipsquote-timestamp_eq__qt_1443520823_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_What would be the downside?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YES9W_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YES9W#1_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I first tried this playground_co_ was on an iPad (iOS 9.0.1) &amp_sm_ my couch as well.  I started the playground_co_ but got no following html element.  True_co_ playground is not very good on mobile_co_ but thought this might qualify as a _qt_downside_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_FYI_co_ I did something similar back when I was doing 3D rig testing _lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkRGTUVVTUxaT01UZUlieGdCODF1blFZZHJFMnRJUHBpcG1KcnBjUVluYXc_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfkRGTUVVTUxaT01UZUlieGdCODF1blFZZHJFMnRJUHBpcG1KcnBjUVluYXc_lt_/a_gt_.  This is 100% webGL.  Do agree with Wingnut_co_ text is lame for your purpose._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tom Krueger","Date":"2015-09-30T12:28:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks All._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I played a bit last night.  Learned a quite a lot from the tips.  I decided the _qt_right_qt_ direction is to use mesh_t_s and not use html elements._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is what I came up with_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This one shows a health bar that moves with a player mesh._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1855Z7%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1855Z7#5_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This one builds on the previous one and adds dynamic texture to write out text to display the health percentage._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3HQSB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3HQSB_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I still have much to learn on how to make things look good.  As an example_co_ I don_t_t know how to make boarders and add padding etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks All for the help.  Please if you want to make these samples better I certainly would like to hear feedback or see what you come up with._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tom_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_btw - JCPalmer - I noticed a library for Dialogs in your sample.  Looked cool.  I couldn_t_t find the dialogs1.1.js version you were using.  Is it public?  I found 1.0 in bablyon extensions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-09-30T12:59:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Very cool Tom! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Glad you_t_ve managed to do it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-09-30T14:47:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ but will be.  I have made many fixes_co_ but just could not commit it_co_ before I got distracted.  Forgot I did not do it. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have many things going right now_co_ but will put it out when I can.  Probably need to code review it_co_ retest everything._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tom Krueger","Date":"2015-10-03T12:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Note_dd_ The way that I Created Planes was using a new feature.  I set Height and Width.  This worked in the playgroud.  However_co_ when I went to add it to my app it did not work. I see in the release notes that the ability to specify Height and Width is in version 2.2 of Babylonjs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hopefully you see this_co_ before spending time on it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone know when the Nuget Package will be available for version 2.2._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have a great day_co__lt_/p_gt__lt_p_gt_Tom_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-04T15:59:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ Dialog extension version 1.1 commited &amp_sm_ posted in Github.  Changes are a new hide / show feature_co_ &amp_sm_ fixing of FreezeWorldMatrix for all the meshes of an LCD Digit_co_ which can add up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I updated test scene here_co_ _lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfjlzYXJKMC1zLXdIaV81REJhbjdfRmczQTJFOEpjWWg2SUIwZVRRS0VsR28_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUfjlzYXJKMC1zLXdIaV81REJhbjdfRmczQTJFOEpjWWg2SUIwZVRRS0VsR28_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is a Hide button in the bottom right_co_ available when using the 2nd_co_ system camera.  Still no documentation_co_ however the js of the test scene  is in the repository @ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/Dialog/testing/dialog_common.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/Dialog/testing/dialog_common.js_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-05T15:52:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nuget package was updated to 2.2 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-21T08:13:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI updated Tom_t_s playground... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3HQSB%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3HQSB#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks like Adam beat me to it... with #5_co_ though.  (thanks Adam)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh well.  It_t_s nice when a thread ends with a working playground.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]