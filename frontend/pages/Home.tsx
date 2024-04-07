import { Text, View, StyleSheet } from 'react-native';
import VentureCard from './components/VentureCard';
import MainVentureCard from './components/MainVentureCard';
import VenturesBox from './components/VenturesBox';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Venture</Text>
            <MainVentureCard navigation={navigation}/>
            <Text style={styles.title}>Popular Ventures</Text>
            <VenturesBox cards={[["Go on a Hike", 'https://s3-alpha-sig.figma.com/img/0e84/ca2b/ec87ddd661523a8b37c460df8f7782fb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pylkKekpSeiyKkrB67gKTE4UHVzFmPAozxL4Mq0KEjBZxtN2~zf0uLsaxd6IY9SKYkiyLKq8t15SvI-YQQzXLh1R4Ww6FRGxqkyQXZsaWPEilpK1oElSEq1qo1FAIBDiycurZOqE8U4ptRROC2CxqQ4KAGfn7m~~2b1gZ1sCppB--52GuBlbTIvRGInqj8nF4by06uGDbShkhmi2LSss~6zj4~2jTf18ghr7VNJZmFXzooAhQvcuKyxtBO~h8pt6JhQQZyEGfNuoUJarPSAhBu8bCHKNHX460LIJoEOuFPeh6g7GI-JOZDby3J60u48rQJ~l3I7cVNJykhZli0M3fQ__', "386 people joined"],
             ["Dance Away", 'https://s3-alpha-sig.figma.com/img/ec36/d0e6/3ff2306914a4d8ffdad444f724a5e7f8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BimLKs9Nok2wEss1uD8FgnR-ni5p0JbNs5xI6uq93-o07~7vizwXq9Uo8giPZ0vwUl3AgK5d-dsGjDZfKVTRjGj-j1hMZBrovxEiGlKZSQXNFkTinZzaabFBCJA3VlOS6k2D3kRdRg7RRhp7DJtx8t8ZmqFiEeF6KIZBTWIjEOE1L13JwBds~IChsrdypmC7VmYTALLlnmbS2YqgVlJsVJRd-sDjsY8cnOn9~u4gtYonkR2Rjg4zB0oSP6UTMGDCI~W2q0Zrofmu-hgZ70NdVSWmqhJFuHOe5gVIDpWsxJWC~XSbrC0Dckoe9HtMorJGv5tJ7claiB19cK~lA9MI7Q__', "822 people joined"],
              ["Cloudgazing", 'https://uconnladybug.files.wordpress.com/2013/08/clouds-by-pamm-cooper-cumulus.jpg', "702 people joined"]]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:50,
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop:50,
        marginLeft: 15,
    }
});

export default HomeScreen;