import { MenuType } from "shared/entity/menu";

export interface IMenuTemplateProps {
    data: MenuType;
    isToggle: boolean;
    show: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>,
    hamburgerButtonRef: React.MutableRefObject<null>,
    style: string
}