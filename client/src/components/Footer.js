import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const Footer = props => (
    <div class='footer'>
        <p class="footer-block">
            <span>
                <a href='https://github.com/Project3-WillMarkPete/Project3' target="_blank" rel="noopener noreferrer">
                    <Glyphicon glyph="star" aria-hidden="true" alt="GitHub"/>
                </a>
            </span> Created By: Pete Garcia, Mark Alaniz, &amp; Will Blake 2018 &copy;
        </p>
    </div>
)

export default Footer;