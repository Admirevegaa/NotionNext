import { Fragment } from 'react';
import { HTMLVisualElement } from '../html/HTMLVisualElement.mjs';
import { SVGVisualElement } from '../svg/SVGVisualElement.mjs';
import { isSVGComponent } from './utils/is-svg-component.mjs';

const createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? new SVGVisualElement(options, { enableHardwareAcceleration: false })
        : new HTMLVisualElement(options, {
            allowProjection: Component !== Fragment,
            enableHardwareAcceleration: true,
        });
};

export { createDomVisualElement };
