[{"Owner":"Vousk-prod.","Date":"2014-12-16T21:49:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi people_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nice idea to use gzip version of babylon.js file_co_ thank you DK !_lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_64175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_11110_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1418316157_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_the minified version is less than 600k and we use gzip on it to go down less than 100k_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But to optimise more_co_ I also activated on my apache server automatic gzip of .babylon files_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#808080_sm__qt__gt__lt_em_gt_(for those that could help_co_ it could be done in the .htaccess _dd__lt_/em_gt__lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_AddOutputFilterByType DEFLATE application/babylon \\                              application/babylonmeshdata_lt_/pre_gt__lt_p_gt_And now I cannot anymore express the loading progress in %_co_ as if _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_progress.lengthComputable_lt_/span_gt_ is no more computable._lt_/p_gt__lt_p_gt_Is that normal or I_t_m doing something wrong ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-16T22:07:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Unfortunately this is normal. My IIS server is doing the same_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AVENGER NO WAR","Date":"2014-12-17T20:02:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_does your server sends the CONTENT-LENGTH header to the client?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-18T10:43:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t know. I can_t_t configure directly the apache conf._lt_/p_gt__lt_p_gt_But I can add anything in .htaccess_co_ is it possible to make the server send this header via htaccess ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-12-18T15:23:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Knowledge of apache configuration is not actually required to know if content length is being sent.  Here is how to tell in Java.  How it might translate into Java script is unknown_co_ but running this against a url on your server will tell you if you should care._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_import java.io.*_sm_import java.net.*_sm_public class Length {\tpublic static void main(String[] args) throws Exception {    \tfinal String addr _eq_ (args.length &gt_sm_ 0) ? args[0] _dd_ _qt_http_dd_//svn.code.sf.net/p/cmusphinx/code/trunk/cmudict/cmudict.0.7a_qt__sm_        DataInputStream response _eq_ null_sm_        HttpURLConnection con _eq_ null_sm_        try{            final URL site _eq_ new URL(addr)_sm_            con _eq_ (HttpURLConnection) site.openConnection()_sm_            // set attributes prior to actually connecting            con.setUseCaches(false)_sm_            con.setConnectTimeout(0)_sm_            con.setReadTimeout(0)_sm_            // connect &amp_sm_ check response_co_ store cookie_co_ &amp_sm_ get response data            con.connect()_sm_                        final int returnCode _eq_ con.getResponseCode()_sm_            if (returnCode _eq__eq_ HttpURLConnection.HTTP_OK){                response _eq_ new DataInputStream(con.getInputStream() )_sm_                int length _eq_ con.getContentLength()_sm_                System.out.println( (length !_eq_ -1) ? _qt_Known length of _qt_ + length _dd_ _qt_unknown length_qt_)_sm_            }else{                throw new Exception(addr + _qt_ Web site responded_dd_ _qt_ + con.getResponseMessage() + _qt__co_ response code_dd_ _qt_ + returnCode)_sm_            }        }finally{            if (response !_eq_ null) response.close()_sm_            if (con !_eq_ null) con.disconnect()_sm_        }    }}_lt_/pre_gt__lt_p_gt_Never ran this myself_co_ but I did chop it out of a program to retrieve / build an Arpabet database_co_ and it compiles._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]