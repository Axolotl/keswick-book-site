import React from 'react'
import Link from 'gatsby-link'

import bookimage from '../images/content/k-book-purchase_0.jpg'

// need an updated image, and to know whether this still even works
function PaypalButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="55RPJK8XVPS48" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
      <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}

const PurchasePage = () => (
  <div className="node-type-product-display">
    <img id="borderless" typeof="foaf:Image" src={bookimage} alt="" />
    <div className="field-name-body">
      <p>The Story of Keswick Hall weaves first hand accounts and archival documentation together with more than 150 images and photographs (many never before published). This high quality, 163-page, hardcover, cloth-bound book with glossy dust jacket is perfect for anyone who has ever been to this fascinating property -- whether recently or many years ago -- or for anyone who dreams about visiting.</p>
      <div id="available-soon">
        <h5>Available Now</h5>
      </div>
      <PaypalButton />
      <div id="ordering-options">
        <h5>Options for ordering now include both snail mail and online ordering:</h5>
        <div>
          <p>Each book costs $40.00 plus 5% Virginia state tax (for Virginia residents only). That's $2.00 per book for tax.</p>
          <p>Shipping costs are as follows:</p>
          <blockquote><p>Domestic Rate:<br /> 1-3 books: Add $4.00 for shipping<br />4-6 books: Add $8.00 for shipping<br />7-9 books: Add $12.00 for shipping<br />10+ books: Free shipping<br />International rate:<br />$5.00 per book standard shipping<br />$10.00 per book expedited shipping</p></blockquote>
          <p>1. Snail mail: send your full name, address, and phone number ( in case of questions) plus a check or money order payable to Paper Shoe Press to:</p>
          <blockquote><p>Paper Shoe Press<br />P.O.Box 792<br />Keswick, VA 22947</p></blockquote>
        </div>
        <div>
          2. Online ordering: Click on "Buy Now" above, and follow the prompts.
          <p>If you live in the Charlottesville area or plan a visit, send an email to <a href="mailto:papershoepress@gmail.com">papershoepress@gmail.com</a> to arrange for local pick up of any number of books with no shipping cost.<br />If you would like a signed copy, or have any other message for the author or Paper Shoe Press, send an email to <a href="mailto:papershoepress@gmail.com">papershoepress@gmail.com</a>. </p>
        </div>
      </div>
    </div>  
  </div>
)

export default PurchasePage
