import { View, Text } from "react-native";
import VentureGalleryCard from "./components/VentureGalleryCard";

const VentureGallery = () => {
    return (
        <View>
            <Text>venture gallery</Text>
            <VentureGalleryCard title={"go on a hike"}/>
            <VentureGalleryCard title={"cloudgazing"}/>
        </View>
    )
}

export default VentureGallery