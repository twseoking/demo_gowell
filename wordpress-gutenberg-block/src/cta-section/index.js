import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    RichText,
    URLInput
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    ColorPicker
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';

registerBlockType('crazypaws/cta-section', {
    edit: ({ attributes, setAttributes }) => {
        const { title, description, buttonText, buttonUrl, backgroundColor, textColor } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('CTA Settings', 'crazypaws-blocks')}>
                        <TextControl
                            label={__('Button Text', 'crazypaws-blocks')}
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                        />
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                {__('Button URL', 'crazypaws-blocks')}
                            </label>
                            <URLInput
                                value={buttonUrl}
                                onChange={(value) => setAttributes({ buttonUrl: value })}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                {__('Background Color', 'crazypaws-blocks')}
                            </label>
                            <ColorPicker
                                color={backgroundColor}
                                onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                                {__('Text Color', 'crazypaws-blocks')}
                            </label>
                            <ColorPicker
                                color={textColor}
                                onChangeComplete={(value) => setAttributes({ textColor: value.hex })}
                            />
                        </div>
                    </PanelBody>
                </InspectorControls>

                <div
                    className="crazypaws-cta-section"
                    style={{
                        backgroundColor: backgroundColor,
                        color: textColor
                    }}
                >
                    <div className="cta-content">
                        <RichText
                            tagName="h2"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Enter title...', 'crazypaws-blocks')}
                            className="cta-title"
                            style={{ color: textColor }}
                        />
                        <RichText
                            tagName="p"
                            value={description}
                            onChange={(value) => setAttributes({ description: value })}
                            placeholder={__('Enter description...', 'crazypaws-blocks')}
                            className="cta-description"
                            style={{ color: textColor }}
                        />
                        <div className="cta-button-wrapper">
                            <a
                                href={buttonUrl}
                                className="cta-button"
                                onClick={(e) => e.preventDefault()}
                            >
                                {buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { title, description, buttonText, buttonUrl, backgroundColor, textColor } = attributes;

        return (
            <div
                className="crazypaws-cta-section"
                style={{
                    backgroundColor: backgroundColor,
                    color: textColor
                }}
            >
                <div className="cta-content">
                    <RichText.Content
                        tagName="h2"
                        value={title}
                        className="cta-title"
                        style={{ color: textColor }}
                    />
                    <RichText.Content
                        tagName="p"
                        value={description}
                        className="cta-description"
                        style={{ color: textColor }}
                    />
                    <div className="cta-button-wrapper">
                        <a href={buttonUrl} className="cta-button">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});
