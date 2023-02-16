import * as React from 'react';
import { injectLibrary } from 'template/util/handleInjectLibrary';

declare global {
    interface Window {
        Circles: any;
    }
}

export interface ICirclePercentageLibProps {}

export interface ICirclePercentageLibState {}

export default class CirclePercentageLib extends React.Component<
    ICirclePercentageLibProps,
    ICirclePercentageLibState
> {
    constructor(props: ICirclePercentageLibProps) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        if (window && window.Circles) {
            await this.callbackSuccess(true);
        } else {
            injectLibrary(
                this.callbackSuccess,
                'circles-library-script',
                './circles.js'
            );
        }
    }

    callbackSuccess = async (loaded?: boolean) => {
        if (!loaded) {
            return;
        } else {
            await this.setupCircle();
        }
    };

    setupCircle = () => {
        return window.Circles.create({
            id: 'circles-1',
            radius: window.innerWidth*80/1280,
            value: 75,
            maxValue: 100,
            width: 3,
            text: function (value: string) {
                return `<div class="flex justify-center items-center"><span class="block mr-1 text-13-custom">05/21</span><span class="block text-32-custom">${value} %</span></div>`;
            },
            colors: ['transparent', '#fff'],
            duration: 400,
            wrpClass: 'circles-wrp w-full h-full',
            textClass: 'text-light',
            styleWrapper: true,
            styleText: true,
        });
    };

    public render() {
        return (
            <div
                className="circle w-120 h-120 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                id="circles-1"
            ></div>
        );
    }
}
