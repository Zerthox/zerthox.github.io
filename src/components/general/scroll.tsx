import React, {forwardRef, useEffect} from "react";

export const scrollToElement = (element: HTMLElement) => {
    if (element.id) {
        window.location.hash = `#${element.id}`;
    }
    window.scrollTo(0, element.offsetTop);
};

export const scrollToRef = <E extends HTMLElement>(ref: React.RefObject<E>) => scrollToElement(ref.current);

export const scrollToId = (id: string) => scrollToElement(document.getElementById(id));

interface RequiredProps<E extends HTMLElement> {
    className?: string;
    children?: React.ReactNode;
    id: string;
    ref: React.Ref<E>;
}

export interface ScrollTargetProps<E extends HTMLElement> {
    type?: React.ComponentType<RequiredProps<E>> | string;
    id: string;
    className?: string;
    children?: React.ReactNode;
}

const ScrollTarget = <E extends HTMLElement>(
    {type, id, className, children}: ScrollTargetProps<E>,
    ref: React.RefObject<E>
) => {
    const Element = type;
    useEffect(() => {
        if (window.location.hash === `#${id}`) {
            scrollToRef(ref);
        }
    }, [id, ref]);

    return (
        <Element className={className} id={id} ref={ref}>{children}</Element>
    );
};

const ForwardContainer = forwardRef(ScrollTarget);

export {ForwardContainer as ScrollTarget};
