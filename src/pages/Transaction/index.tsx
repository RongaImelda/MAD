import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import {
  Header,
  TextInput,
  Transaction as TransactionItem,
} from '../../components/molecules';

const Transaction = ({navigation}) => {
  return (
    <ScrollView
      style={styles.pageContainer}
      showsVerticalScrollIndicator={false}>
      <Header
        text="Cash on Hand"
        backButton
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentWrapper}>
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={17} />
        <TextInput label="Type" placeholder="Debit / Credit" />
        <Gap height={17} />
        <Button text="Save" />
        <Gap height={17} />
        <Text style={styles.subTitle}>Last 3 Transactions</Text>
        <TransactionItem
          date="17 April 2024"
          desc="Water, Food"
          price="300.000"
          type="Kredit"
        />
        <TransactionItem
          date="18 April 2024"
          desc="Office supplies"
          price="300.000"
          type="Kredit"
        />
        <TransactionItem
          date="19 April 2024"
          desc="TopUp"
          price="300.000"
          type="Debit"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#020202',
    fontSize: 16,
    marginVertical: 12,
  },
});

export default Transaction;