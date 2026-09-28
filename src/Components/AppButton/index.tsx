import MaterialIcons from "@react-native-vector-icons/material-icons";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { colors } from "../../shared/colors";

type AppButtonMode = "fill" | "outline" ;

interface AppButtonParams extends TouchableOpacityProps {
    mode?: AppButtonMode;
    iconName?: React.ComponentProps<typeof MaterialIcons>['name'];

}

export const AppButton: FC<PropsWithChildren<AppButtonParams>> = ({
    children,
    mode = "fill",
    iconName,
    ...rest
}) => {

    const isFill = mode === "fill";

    return (
        <TouchableOpacity {...rest} className={clsx("w-full px-5 rounded-xl flex-row items-center h-button", iconName ? "justify-between" : "justify-center", { "bg-accent-brand": isFill, "bg-none border-[1px] border-accent-brand": !isFill })}>
            <Text className={clsx("text-base ", {"text-white": isFill, "text-accent-brand": !isFill})}>{children}</Text>
            {
                iconName && <MaterialIcons name={iconName} color={isFill ? colors.white : colors["accent-brand"]} size={24} />
            }
        </TouchableOpacity>
    )
}