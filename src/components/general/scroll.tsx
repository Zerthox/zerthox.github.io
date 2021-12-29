import React, {forwardRef} from "react";

export const scrollTo = <E extends HTMLElement>(ref: React.RefObject<E>) => window.scrollTo(0, ref.current.offsetTop);

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
    ref: React.ForwardedRef<E>
) => {
    const Element = type;

    return (
        <Element className={className} id={id} ref={ref}>{children}</Element>
    );
};

const ForwardContainer = forwardRef(ScrollTarget);

export {ForwardContainer as ScrollTarget};
