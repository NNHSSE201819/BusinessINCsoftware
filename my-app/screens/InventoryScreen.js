import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { WebBrowser } from 'expo';



import { MonoText } from '../components/StyledText';

export default class InventoryScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(){
    super();
    this.state = {
      modals1: false,
      modals2: false,
      modals3: false,
      modals4: false,
      modals5: false,
      modals6: false,
      modals7: false,
      modals8: false,
      modals9: false,
      modals10: false,
      modals11: false,
      modals12: false,
      modals13: false,
      modals14: false,
      modals15: false,
      modals16: false,
      modals17: false,
      modals18: false,
      modals19: false,
      modals20: false,
      modals21: false,
      modals22: false,
      modals23: false,
      modals24: false,
      modals25: false,
      modals26: false,
      modals27: false,
      modals28: false,
      modals29: false,
      modals30: false,
      modals31: false,
      modals32: false,
      modals33: false,
      modals34: false,
      modals35: false,
      modals36: false,
      modals37: false,
      modals38: false,
      modals39: false,
      modals40: false,
      modals41: false,
      modals42: false,
      modals43: false,
      modals44: false,
      modals45: false,
      modals46: false,
      modals47: false,
      modals48: false,
      modals49: false,
      modals50: false,
      modals51: false,
      modals52: false,
      modals53: false,
      modals54: false,
      modals55: false,
      modals56: false,
      modals57: false,
      modals58: false,
      modals59: false,
      modals60: false,
      modals61: false,
      modals62: false,
      modals63: false,
      modals64: false,


    }
  }

  setModals1(visible){
    this.setState({modals1: visible})
  }
  setModals2(visible){
    this.setState({modals2: visible})
  }
  setModals3(visible){
    this.setState({modals3: visible})
  }
  setModals4(visible){
    this.setState({modals4: visible})
  }
  setModals5(visible){
    this.setState({modals5: visible})
  }
  setModals6(visible){
    this.setState({modals6: visible})
  }
  setModals7(visible){
    this.setState({modals7: visible})
  }
  setModals8(visible){
    this.setState({modals8: visible})
  }
  setModals9(visible){
    this.setState({modals9: visible})
  }
  setModals10(visible){
    this.setState({modals10: visible})
  }
  setModals11(visible){
    this.setState({modals11: visible})
  }
  setModals12(visible){
    this.setState({modals12: visible})
  }
  setModals13(visible){
    this.setState({modals13: visible})
  }
  setModals14(visible){
    this.setState({modals14: visible})
  }
  setModals15(visible){
    this.setState({modals15: visible})
  }
  setModals16(visible){
    this.setState({modals16: visible})
  }
  setModals17(visible){
    this.setState({modals17: visible})
  }
  setModals18(visible){
    this.setState({modals18: visible})
  }
  setModals19(visible){
    this.setState({modals19: visible})
  }
  setModals20(visible){
    this.setState({modals20: visible})
  }
  setModals21(visible){
    this.setState({modals21: visible})
  }
  setModals22(visible){
    this.setState({modals22: visible})
  }
  setModals23(visible){
    this.setState({modals23: visible})
  }
  setModals24(visible){
    this.setState({modals24: visible})
  }
  setModals25(visible){
    this.setState({modals25: visible})
  }
  setModals26(visible){
    this.setState({modals26: visible})
  }
  setModals27(visible){
    this.setState({modals27: visible})
  }
  setModals28(visible){
    this.setState({modals28: visible})
  }
  setModals29(visible){
    this.setState({modals29: visible})
  }
  setModals30(visible){
    this.setState({modals30: visible})
  }
  setModals31(visible){
    this.setState({modals31: visible})
  }

  setModals32(visible){
    this.setState({modals32: visible})
  }
  setModals33(visible){
    this.setState({modals33: visible})
  }
  setModals34(visible){
    this.setState({modals34: visible})
  }
  setModals35(visible){
    this.setState({modals35: visible})
  }
  setModals36(visible){
    this.setState({modals36: visible})
  }
  setModals37(visible){
    this.setState({modals37: visible})
  }
  setModals38(visible){
    this.setState({modals38: visible})
  }
  setModals39(visible){
    this.setState({modals39: visible})
  }
  setModals40(visible){
    this.setState({modals40: visible})
  }
  setModals41(visible){
    this.setState({modals41: visible})
  }
  setModals42(visible){
    this.setState({modals42: visible})
  }
  setModals43(visible){
    this.setState({modals43: visible})
  }
  setModals44(visible){
    this.setState({modals44: visible})
  }
  setModals45(visible){
    this.setState({modals45: visible})
  }
  setModals46(visible){
    this.setState({modals46: visible})
  }
  setModals47(visible){
    this.setState({modals47: visible})
  }
  setModals48(visible){
    this.setState({modals48: visible})
  }
  setModals49(visible){
    this.setState({modals49: visible})
  }
  setModals50(visible){
    this.setState({modals50: visible})
  }
  setModals51(visible){
    this.setState({modals51: visible})
  }
  setModals52(visible){
    this.setState({modals52: visible})
  }
  setModals53(visible){
    this.setState({modals53: visible})
  }
  setModals54(visible){
    this.setState({modals54: visible})
  }
  setModals55(visible){
    this.setState({modals55: visible})
  }
  setModals56(visible){
    this.setState({modals56: visible})
  }
  setModals57(visible){
    this.setState({modals57: visible})
  }
  setModals58(visible){
    this.setState({modals58: visible})
  }
  setModals59(visible){
    this.setState({modals59: visible})
  }
  setModals60(visible){
    this.setState({modals60: visible})
  }
  setModals61(visible){
    this.setState({modals61: visible})
  }
  setModals62(visible){
    this.setState({modals62: visible})
  }
  setModals63(visible){
    this.setState({modals63: visible})
  }
  setModals64(visible){
    this.setState({modals64: visible})
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Inventory</Text>
          <Text style={styles.divide}></Text>
        </View>


          <ScrollView style={styles.container2}>
            <Text style={styles.divide}></Text>
            <Text style={styles.subText}>Shirts</Text>
            <Text style={styles.divide}></Text>

            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals1(true)}}>
                <Image style={styles.pic} source={require('../assets/images/s.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals1}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/s.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>300 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals1(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals2(true)}}>
                <Image style={styles.pic} source={require('../assets/images/s1.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals2}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/s1.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals2(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals3(true)}}>
                <Image style={styles.pic} source={require('../assets/images/s2.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals3}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/s2.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>315 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals3(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals4(true)}}>
                <Image style={styles.pic} source={require('../assets/images/s3.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals4}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/s3.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>330 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals4(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2}>
            <TouchableOpacity onPress={() => {this.setModals13(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s4.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals13}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s4.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>305 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals13(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals14(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s5.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals14}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s5.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>280 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals14(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals15(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s6.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals15}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s6.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>275 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals15(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals16(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s7.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals16}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s7.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>285 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals16(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          <View style={styles.pic2} >
            <TouchableOpacity onPress={() => {this.setModals33(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s9.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals33}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s9.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>300 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals33(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals34(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s10.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals34}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s10.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>370 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals34(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals35(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s11.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals35}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s11.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>310 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals35(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals36(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s12.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals36}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s12.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>335 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals36(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          <View style={styles.pic2} >
            <TouchableOpacity onPress={() => {this.setModals37(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s13.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals37}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s13.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>345 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals37(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals38(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s14.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals38}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s14.jpg')}/>

                </View>

                <View style={styles.text}>
                  <Text style={styles.t}>290 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals38(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals39(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s15.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals39}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s15.jpg')}/>

                </View><View style={styles.text}>
                  <Text style={styles.t}>380 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals39(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => {this.setModals40(true)}}>
              <Image style={styles.pic} source={require('../assets/images/s16.jpg')}/>
            </TouchableOpacity>
            <Modal
              animationType = "slide"
              trasparent={false}
              visible={this.state.modals40}
            >
              <View style={styles.modalview}>
                <View style={styles.modalview2}>

                  <Image style={styles.modalpic} source={require('../assets/images/s16.jpg')}/>

                </View>
                <View style={styles.text}>
                  <Text style={styles.t}>300 Pts</Text>

                </View>
                <TouchableOpacity onPress={() => {this.setModals40(false)}}>
                  <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>





            <Text style={styles.divide}></Text>
            <Text id="p" style={styles.subText}>Pants</Text>
            <Text style={styles.divide}></Text>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals5(true)}}>
                <Image style={styles.pic} source={require('../assets/images/DP0706201717213547M.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals5}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/DP0706201717213547M.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>300 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals5(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>


              <TouchableOpacity onPress={() => {this.setModals6(true)}}>
                <Image style={styles.pic} source={require('../assets/images/DP1130201708530536M.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals6}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/DP1130201708530536M.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>315 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals6(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>



              <TouchableOpacity onPress={() => {this.setModals7(true)}}>
                <Image style={styles.pic} source={require('../assets/images/DP1205201706382400M.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals7}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/DP1205201706382400M.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>325 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals7(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>



              <TouchableOpacity onPress={() => {this.setModals8(true)}}>
                <Image style={styles.pic} source={require('../assets/images/pantsbundle.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals8}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/pantsbundle.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>250 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals8(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals17(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p1.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals17}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p1.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>360 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals17(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals18(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p2.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals18}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p2.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>340 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals18(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals19(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p3.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals19}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p3.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals19(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals20(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p4.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals20}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p4.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>290 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals20(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals41(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p5.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals41}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p5.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>305 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals41(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals42(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p6.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals42}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p6.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>325 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals42(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals43(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p7.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals43}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p7.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>370 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals43(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals44(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p8.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals44}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p8.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>315 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals44(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals45(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p9.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals45}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p9.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>345 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals45(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals46(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p10.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals46}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p10.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>300 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals46(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals47(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p11.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals47}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p11.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>285 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals47(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals48(true)}}>
                <Image style={styles.pic} source={require('../assets/images/p12.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals48}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/p12.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>310 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals48(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>












            <Text style={styles.divide}></Text>
            <Text style={styles.subText}>Dresses</Text>
            <Text style={styles.divide}></Text>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals9(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d1.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals9}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d1.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals9(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>




              <TouchableOpacity onPress={() => {this.setModals10(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d2.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals10}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d2.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>380 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals10(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>





              <TouchableOpacity onPress={() => {this.setModals11(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d3.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals11}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d3.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>400 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals11(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>


              <TouchableOpacity onPress={() => {this.setModals12(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d4.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals12}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d4.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>390 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals12(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

            </View>


            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals21(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d5.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals21}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d5.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>360 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals21(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals22(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d6.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals22}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d6.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>340 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals22(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals23(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d7.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals23}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d7.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>365 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals23(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals24(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d8.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals24}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d8.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>385 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals24(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals49(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d9.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals49}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d9.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>395 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals49(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals50(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d10.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals50}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d10.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>345 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals50(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals51(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d11.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals51}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d11.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>375 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals51(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals52(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d12.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals52}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d12.jpg')}/>

                  </View><View style={styles.text}>
                    <Text style={styles.t}>360 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals52(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals53(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d13.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals53}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d13.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>380 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals53(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals54(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d14.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals54}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d14.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>330 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals54(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals55(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d15.png')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals55}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d15.png')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>390 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals55(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals56(true)}}>
                <Image style={styles.pic} source={require('../assets/images/d16.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals56}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/d16.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals56(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>




            <Text style={styles.divide}></Text>
            <Text style={styles.subText}>Shoes</Text>
            <Text style={styles.divide}></Text>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals25(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh1.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals25}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh1.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals25(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals26(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh2.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals26}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh2.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals26(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals27(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh3.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals27}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh3.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals27(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>

              <TouchableOpacity onPress={() => {this.setModals28(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh4.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals28}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh4.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals28(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals29(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh5.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals29}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh5.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals29(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals30(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh6.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals30}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh6.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals30(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals31(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh7.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals31}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh7.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals31(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals32(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh8.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals32}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh8.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals32(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals57(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh9.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals53}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh9.jpg')}/>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals57(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals58(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh10.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals58}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh10.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals58(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals59(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh11.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals59}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh11.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals59(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals60(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh12.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals60}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh12.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals60(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>
            <View style={styles.pic2} >
              <TouchableOpacity onPress={() => {this.setModals61(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh13.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals61}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh13.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals61(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals62(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh14.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals62}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh14.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals62(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals63(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh15.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals63}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh15.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals63(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => {this.setModals64(true)}}>
                <Image style={styles.pic} source={require('../assets/images/sh16.jpg')}/>
              </TouchableOpacity>
              <Modal
                animationType = "slide"
                trasparent={false}
                visible={this.state.modals64}
              >
                <View style={styles.modalview}>
                  <View style={styles.modalview2}>

                    <Image style={styles.modalpic} source={require('../assets/images/sh16.jpg')}/>

                  </View>
                  <View style={styles.text}>
                    <Text style={styles.t}>350 Pts</Text>

                  </View>
                  <TouchableOpacity onPress={() => {this.setModals64(false)}}>
                    <Text style={styles.back}>Back</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>






          </ScrollView>
      </View>

    );
  }


}

const styles = StyleSheet.create({
  header:{
    fontSize: 70,

    marginTop: 30,

    fontFamily: 'HelveticaNeue-Light'


  },
  text:{
    fontSize: 30,
    textAlign: 'center',

  },
  t:{fontFamily: 'HelveticaNeue-Light',
  fontSize:30,
  textAlign: 'center',
  marginTop:30,
},
  modalview:{alignItems: 'center',
backgroundColor: '#ACA5A5',
flex:1,}

  ,
  modalview2:{
    backgroundColor: '#ACA5A5',


  },
  modalpic:{
    marginTop: 100,
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: '#ACA5A5',
  },
  back:{
    bottom: -350,
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'HelveticaNeue-Light',
    backgroundColor: '#ACA5A5',

  },
  headerContainer:{
    marginTop: 40,
    alignItems: 'center',


  },
  container: {
    flex: 1,
    backgroundColor: '#ACA5A5',
  },
  menuContainer: {
    marginTop: 110,
    alignItems: 'center',
    flexDirection:'row',
    paddingLeft: 70,

  },

  container2: {
    flex: 1,


  },
  menuText: {
    fontSize: 20,


  },
  button: {
    fontSize: 14,
    color: '#2e78b7',
    alignItems: 'center',




  },
  subText: {
    fontSize: 40,
    fontFamily: 'HelveticaNeue-Light',
    alignItems: 'center',
  },
  pic:{
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
    width: 100,

  },
  pic2:{flexDirection:'row',
  backgroundColor: 'white',
  alignItems: 'center',},
  divide:{
    backgroundColor: 'gray',
    height:5,
  },
});
