/* eslint-disable @typescript-eslint/no-explicit-any */
import detectOverflow from '@popperjs/core/lib/utils/detectOverflow';

export const maxSize = {
    name: 'maxSize',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['offset', 'preventOverflow', 'flip'],
    fn({ state, name }: { state: any, name: string }) {
        const overflow = detectOverflow(state);
        const {x, y} = state.modifiersData.preventOverflow || {x: 0, y: 0};
        const {width, height} = state.rects.popper;
        const [basePlacement] = state.placement.split('-');

        const widthProp = basePlacement === 'left' ? 'left' : 'right';
        const heightProp = basePlacement === 'top' ? 'top' : 'bottom';

        state.modifiersData[name] = {
            width: width - overflow[widthProp] - x,
            height: height - overflow[heightProp] - y
        };
    }
};