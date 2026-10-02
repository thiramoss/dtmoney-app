import { createContext, FC, PropsWithChildren, useCallback, useContext, useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { TouchableWithoutFeedback, View } from "react-native";
import { colors } from "../shared/colors";

interface BottomSheetContextType {
    openBottomSheet: (content: React.ReactNode, index?: number) => void;
    closeBottomSheet: () => void;
}

export const BottomSheetContext = createContext<BottomSheetContextType>({} as BottomSheetContextType);

export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {

    const [content, setContent] = useState<React.ReactNode | null>(null);
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["70%", "90%"], []);
    const [isOpen, setIsOpen] = useState(false);

    const openBottomSheet = useCallback(
        (NewContent: React.ReactNode, index: number = 0) => {
            setContent(NewContent);
            setIsOpen(true);
            bottomSheetRef.current?.present();
        },
        []
    );

    const closeBottomSheet = useCallback(() => {
        bottomSheetRef.current?.dismiss();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            setIsOpen(false);
            setContent(null); 
        }
    }, []);

    return (
        <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
            <BottomSheetModalProvider>
                
                {children}

                {isOpen && (
                    <TouchableWithoutFeedback onPress={closeBottomSheet}>
                        <View className="absolute inset-0 bg-black/70 z-1" />
                    </TouchableWithoutFeedback>
                )}

                <BottomSheetModal 
                    ref={bottomSheetRef} 
                    snapPoints={snapPoints} 
                    style={{zIndex: 2}} 
                    enablePanDownToClose={true} 
                    onChange={handleSheetChanges}
                    backgroundStyle={{
                        backgroundColor: colors["background-secondary"],
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                        elevation: 9,
                    }}
                >
                    <BottomSheetScrollView>
                        {content}
                    </BottomSheetScrollView>
                </BottomSheetModal>

            </BottomSheetModalProvider>
        </BottomSheetContext.Provider>
    )
}

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext);
}