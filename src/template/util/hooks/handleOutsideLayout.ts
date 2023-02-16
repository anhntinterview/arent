import React from 'react';

export function useOutsideLayout(
    ref1: React.MutableRefObject<any>,
    ref2: React.MutableRefObject<any>,
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
) {
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref1.current &&
                !ref1.current.contains(event.target) &&
                ref2.current &&
                !ref2.current.contains(event.target)
            ) {
                setDisplay((prevState) => !prevState);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref1, ref2]);
}
