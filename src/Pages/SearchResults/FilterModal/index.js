import React from 'react';
import { Text,TouchableOpacity,Modal,Image,ScrollView, View } from 'react-native';
import images from "@assets/imags-m";
import styles from "./style"
import {i18n} from 'react-native-i18n-localize'

const FilterModal =(props) =>{

    return (
 
      <Modal
        animated
        animationType="fade"
        visible={true}
        transparent
       >
          <View style={styles.body}>
            <View style={styles.container}>
              <ScrollView contentInsetAdjustmentBehavior="automatic" 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scrollView}
                >  

                  <View style={styles.bodyModal}>
                    <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.containerClose} onPress={()=>props.setModalVisibleFilter(false)}>
                        <Image style={[styles.imageClose]} source={images["close"]}/> 
                    </TouchableOpacity>

                    <Text style={styles.title}>{i18n.t("Filter_by")}</Text>
                    <View style={styles.type}>
                      <Text style={styles.typeTitle}>{i18n.t("Budget_1_Night")}</Text>
                      <View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.typeSection}>
                            <Text style={styles.typeText}>0 {i18n.t("jod")} - 100 {i18n.t("jod")} (58)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.typeSection}>
                            <Text style={styles.typeText}>100 {i18n.t("jod")} - 150 {i18n.t("jod")} (158)</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.typeSection}>
                            <Text style={styles.typeText}>150 {i18n.t("jod")} - 200  {i18n.t("jod")} (78)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={styles.typeSection}>
                            <Text style={styles.typeText}>200 {i18n.t("jod")} - 300 {i18n.t("jod")} (132)</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionActive]}>
                            <Text style={[styles.typeText,styles.typeTextActive]}>300 {i18n.t("jod")} + (53)</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>

                    <View style={styles.type}>
                      <Text style={styles.typeTitle}>{i18n.t("Star_Rating")}</Text>
                      <View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>{i18n.t("Star")}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>1 {i18n.t("Star")} (7)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>2 {i18n.t("Star")} (35)</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>3 {i18n.t("Stars")} (19)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar,styles.typeSectionActive]}>
                            <Text style={[styles.typeText,styles.typeTextActive]}>4 {i18n.t("Stars")} (19)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>5 {i18n.t("Stars")} (19)</Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>

                    <View style={styles.type}>
                      <Text style={styles.typeTitle}>{i18n.t("Number_Beds")}</Text>
                      <View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>1 {i18n.t("Bed")} (56)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>2 {i18n.t("Beds")} (7)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>3 {i18n.t("Beds")} (122)</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>4 {i18n.t("Beds")} (150)</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar,styles.typeSectionActive]}>
                            <Text style={[styles.typeText,styles.typeTextActive]}>5 {i18n.t("Beds")} (265) +</Text>
                          </TouchableOpacity>
                        
                        </View>
                      </View>

                    </View>

                    <View style={styles.type}>
                      <Text style={styles.typeTitle}>{i18n.t("Facilities")}</Text>
                      <View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>{i18n.t("BBQ_facilities")}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>{i18n.t("Parking")}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>{i18n.t("Kids_Area")}</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.section}>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={styles.typeText}>{i18n.t("Entertainment")}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar]}>
                            <Text style={[styles.typeText]}>{i18n.t("Swimming_Pool")}</Text>
                          </TouchableOpacity>
                        
                        </View>

                        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" style={[styles.typeSection,styles.typeSectionStar,styles.typeSectionMore]}>
                            <Text style={[styles.typeText,styles.typeTextMore]}>{i18n.t("Show_More")}</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </View>

                  <TouchableOpacity  activeOpacity={0.6} style={styles.conatinerBtnDone} underlayColor="#DDDDDD">
                    <Text style={styles.textBtn}>{i18n.t("Done")}</Text>
                  </TouchableOpacity>

              </ScrollView>
            </View>
          </View>
      </Modal>


    );
  }



export default FilterModal;