import React from 'react'
import Link from 'gatsby-link'

const AddContent = () => (
  <div className="content">
    <p>Add your own story or picture to the Story of Keswick Hall. You may share just text, one picture or many, or both! Submissions will be reviewed before posting. If you would rather contact us by email about your story, please write to papershoepress@gmail.com.</p>
    <form className="node-form node-historical_content-form" enctype="multipart/form-data" action="/node/add/historical-content" method="post" id="historical-content-node-form" accept-charset="UTF-8">
      <div>
        <div className="form-item form-type-textfield form-item-title">
          <label for="edit-title">Title <span className="form-required" title="This field is required.">*</span></label>
          <input type="text" id="edit-title" name="title" value="" size="60" maxlength="255" className="form-text required" />
        </div>
        <input type="hidden" name="changed" value="" />
        <input type="hidden" name="form_build_id" value="form-BTo2waCHcW5K-g4ju6hc2vdPEnJb5Etmd6v5uTcNFiw" />
        <input type="hidden" name="form_id" value="historical_content_node_form" />
        <div className="field-type-list-text field-name-field-timeframe field-widget-options-select form-wrapper" id="edit-field-timeframe">
          <div className="form-item form-type-select form-item-field-timeframe-und">
            <label for="edit-field-timeframe-und">Year <span className="form-required" title="This field is required.">*</span></label>
            <select id="edit-field-timeframe-und" name="field_timeframe[und]" className="form-select required">
              <option value="_none">- Select a value -</option>
              <option value="1">pre-1912 through 1947</option>
              <option value="2">1947-1965</option>
              <option value="3">1965-1972</option>
              <option value="4">1972-1990</option>
              <option value="5">1990-1999</option>
              <option value="6">1999-present</option>
            </select>
            <div className="description">Please select the time frame in which your Keswick Hall story or image comes from.</div>
          </div>
        </div>
        <div className="field-type-text-with-summary field-name-body field-widget-text-textarea-with-summary form-wrapper" id="edit-body">
          <div id="body-add-more-wrapper">
            <div className="text-format-wrapper">
              <div className="text-summary-wrapper">
              </div>
              <div className="form-item form-type-textarea form-item-body-und-0-value">
                <label for="edit-body-und-0-value">Story or Information </label>
                <div className="form-textarea-wrapper resizable">
                  <textarea className="text-full form-textarea" id="edit-body-und-0-value" name="body[und][0][value]" cols="60" rows="20"></textarea>
                </div>
              </div>
            <fieldset className="filter-wrapper form-wrapper" id="edit-body-und-0-format">
              <div className="fieldset-wrapper">
                <div className="filter-help form-wrapper" id="edit-body-und-0-format-help">
                  <p><a href="/filter/tips">More information about text formats</a></p>
                </div>
                <div className="filter-guidelines form-wrapper" id="edit-body-und-0-format-guidelines">
                  <div className="filter-guidelines-item filter-guidelines-plain_text">
                    <h3>Plain text</h3>
                    <ul className="tips">
                      <li>No HTML tags allowed.</li>
                      <li>Web page addresses and e-mail addresses turn into links automatically.</li>
                      <li>Lines and paragraphs break automatically.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="field-type-image field-name-field-user-image field-widget-image-image form-wrapper" id="edit-field-user-image">
        <div id="edit-field-user-image-und-ajax-wrapper">
          <fieldset id="edit-field-user-image-und" className="form-wrapper">
            <legend>
              <span className="fieldset-legend">Image</span>
            </legend>
            <div className="fieldset-wrapper">
              <div className="fieldset-description">Upload one or many images, explaining the significance of them and the historical relation to Keswick Hall.</div>
                <div className="form-item form-type-managed-file form-item-field-user-image-und-0">
                  <label for="edit-field-user-image-und-0">Add a new file </label>
                  <div className="image-widget form-managed-file clearfix">
                    <div className="image-widget-data">
                      <input type="file" id="edit-field-user-image-und-0-upload" name="files[field_user_image_und_0]" size="22" className="form-file" />
                      <input type="submit" id="edit-field-user-image-und-0-upload-button" name="field_user_image_und_0_upload_button" value="Upload" className="form-submit" />
                      <input type="hidden" name="field_user_image[und][0][_weight]" value="0" />
                      <input type="hidden" name="field_user_image[und][0][fid]" value="0" />
                      <input type="hidden" name="field_user_image[und][0][display]" value="1" />
                    </div>
                  </div>
                  <div className="description">
                    Files must be less than <strong>12 MB</strong>.<br />Allowed file types: <strong>png gif jpg jpeg</strong>.
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="field-type-text field-name-field-user-name field-widget-text-textfield form-wrapper" id="edit-field-user-name">
          <div id="field-user-name-add-more-wrapper">
            <div className="form-item form-type-textfield form-item-field-user-name-und-0-value">
              <label for="edit-field-user-name-und-0-value">Your Name </label>
              <input className="text-full form-text" type="text" id="edit-field-user-name-und-0-value" name="field_user_name[und][0][value]" value="" size="60" maxlength="55" />
            </div>
          </div>
        </div>
        <div className="field-type-email field-name-field-user-email field-widget-email-textfield form-wrapper" id="edit-field-user-email">
          <div id="field-user-email-add-more-wrapper">
            <div className="text-full-wrapper">
              <div className="form-item form-type-textfield form-item-field-user-email-und-0-email">
              <label for="edit-field-user-email-und-0-email">Email <span className="form-required" title="This field is required.">*</span></label>
              <input type="text" id="edit-field-user-email-und-0-email" name="field_user_email[und][0][email]" value="" size="60" maxlength="128" className="form-text required" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="element-invisible">Vertical Tabs</h2>
      <div className="vertical-tabs-panes">
        <input className="vertical-tabs-active-tab" type="hidden" name="additional_settings__active_tab" value="" />
      </div>
      <div className="form-actions form-wrapper" id="edit-actions">
        <fieldset className="captcha form-wrapper">
          <legend>
            <span className="fieldset-legend">CAPTCHA</span>
          </legend>
          <div className="fieldset-wrapper">
            <div className="fieldset-description">This question is for testing whether you are a human visitor and to prevent automated spam submissions.</div>
              <input type="hidden" name="captcha_sid" value="329" />
              <input type="hidden" name="captcha_token" value="6070a27b7f6fe94db8d078450ed7cd8a" />
              <img src="/image_captcha/329/1489343300" width="180" height="60" alt="Image CAPTCHA" title="Image CAPTCHA" />
              <div className="form-item form-type-textfield form-item-captcha-response">
                <label for="edit-captcha-response">What code is in the image? <span className="form-required" title="This field is required.">*</span></label>
                <input type="text" id="edit-captcha-response" name="captcha_response" value="" size="15" maxlength="128" className="form-text required" />
                <div className="description">
                  Enter the characters shown in the image.
                </div>
              </div>
            </div>
          </fieldset>
          <input type="submit" id="edit-submit" name="op" value="Save" className="form-submit" />
          <input type="submit" id="edit-preview" name="op" value="Preview" className="form-submit" />
        </div>
      </div>
    </form>  
  </div>
)

export default AddContent