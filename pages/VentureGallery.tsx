import { View, Text } from "react-native";
import VentureGalleryCard from "./components/VentureGalleryCard";

const VentureGallery = () => {
    return (
        <View>
            <Text>venture gallery</Text>
            <VentureGalleryCard title={"Go on a Hike"}/>
            <VentureGalleryCard title={"Cloudgazing"}/>
        </View>
    )
}

export default VentureGallery