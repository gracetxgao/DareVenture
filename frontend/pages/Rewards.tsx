import { View, Text, StyleSheet } from "react-native";
import ProductsBox from "./components/ProductsBox";

const RewardsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recommended</Text>
            <ProductsBox cards={[["Mantis 26 Backpack", 'https://s3-alpha-sig.figma.com/img/08ed/ad85/bcae1cd8d957dae9eb77b244ff3ef186?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0rryFwdz69pJoZQM0JJemNXAK5eri29UTeXUo4eoPTGGklWsYUid7gR9Y2nBsltbLspFVpaB8QBisB-R~plQlzUMtEDCQLbotKHOHe9YAKJzr0ptCuzCvBrhziwZ5P5r0jtzFsRcpj-jbi6STTLa1W2QBotikt9TVJRMlbCdfSPXtvgPafDFoysKiPQ0dvqe9y~0SPzf7uA-FXjoCzLBaTl9h-dD2Tr9TLLgm8Cks-bQXEfOOSxvQNHaACeORUYB1XURgWjb2l7ikmR9lkYem1qJUbF0ai6t-FSOLbFCvTVN8rdHy2LMZaHpkJQ8KzXOMa2f6p-HbJD-GHb1Pf52Q__',
            "Arc'Teryx", "2000 points for 20% off"],
        ["Aerios Mid GTX", "https://s3-alpha-sig.figma.com/img/294d/ac68/2b34d9365105c495650ff9f58a7d0f9d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmCqsvMbneSC3o8OZSorURY90jXwQsiCz57vxVw6bOx3JSKZddEUaWiqkUn-0-oJUs0Wa2a4CArQAx5yYGfhUbRp2dsecPW2Yno~gh6tLuHVx9dFo6kgAFP8COtjNDZj4fwo6N62W1-KEyxOm~azhq3DScJWG4ZnXQ04LMCOn4d6l0ctX0lIJkmyQGgVIcCVfPGoiM5CWy0db4IQBEvxWMgGLysWSkmhyBsA8EYMZmkfDJzAQORl5v-fmAzyc9EiJlJyfcHLcIGGhhkGuTZrWuEy5PsPqIWI2E0grEf7mad0kpymfAlbsGz9Ifc1Eko5eSWER4322zB9qaPzNfuqAg__",
        "Arc'Teryx", '1000 points for 15% off']]} redeemed={false}/>
            <Text style={styles.text}>Wishlist</Text>
            <ProductsBox cards={[["Atom Hoody Women's", "https://s3-alpha-sig.figma.com/img/d3ba/dd32/74850102af73d30e6ba278a7e1092071?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax1KGQTtS6sSUYAt-r8Cg0rSn36ivuwz8O7zFOCyi9ZScJx1O9ohOpoqWso5uTTxHCutCGeaRIhp9DTdyKjOUDj39q-aloU0OlKcv18XidsOhcT4UXoMAjzM17H32bD~x6zN4pt1J04chEFHGdbGxgm1HLDdutY8Hk2Fj6h~dpCaO9l~aF~ucICtigbRr5NhchBbDqPyZ8pyEdbLje1GvmR-1AOkS-NSeBi-JUOOkSswof6N~xI9F68SHJLOFbgahXlgYkETZM7mQFwev0PzvZWY1IeNgRpaDA7RfT1qo-8oKoqfFvmehw8lCNMJxWq2n2u-yt--RRGCcDahO1yiyw__",
            "Arc'teryx", "2000 points for 20% off"], ["Mantis 26 Backpack", 'https://s3-alpha-sig.figma.com/img/08ed/ad85/bcae1cd8d957dae9eb77b244ff3ef186?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0rryFwdz69pJoZQM0JJemNXAK5eri29UTeXUo4eoPTGGklWsYUid7gR9Y2nBsltbLspFVpaB8QBisB-R~plQlzUMtEDCQLbotKHOHe9YAKJzr0ptCuzCvBrhziwZ5P5r0jtzFsRcpj-jbi6STTLa1W2QBotikt9TVJRMlbCdfSPXtvgPafDFoysKiPQ0dvqe9y~0SPzf7uA-FXjoCzLBaTl9h-dD2Tr9TLLgm8Cks-bQXEfOOSxvQNHaACeORUYB1XURgWjb2l7ikmR9lkYem1qJUbF0ai6t-FSOLbFCvTVN8rdHy2LMZaHpkJQ8KzXOMa2f6p-HbJD-GHb1Pf52Q__',
            "Arc'Teryx", "2000 points for 20% off"]]} redeemed={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        backgroundColor: '#fff',
        paddingBottom:100,
    },
    text: {
        paddingLeft: 10,
        fontSize: 25,
        paddingTop:25,
        paddingBottom:20,
        fontWeight: 'bold',
    }
});
export default RewardsScreen