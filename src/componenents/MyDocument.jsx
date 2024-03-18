import React from 'react';
import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'THSarabunNew',
  src: 'https://fonts.gstatic.com/s/th-sarabunnew/v5/UyBMkPeaIttI8BAofniEMRtkHjY.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'THSarabunNew',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: '#000',
    borderRightColor: '#000',
    backgroundColor: '#f0f0f0',
    padding: 5,
    fontFamily: 'THSarabunNew',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: '#000',
    borderRightColor: '#000',
    padding: 5,
    fontFamily: 'THSarabunNew',
  },
});

const MyDocument = ({ cartItems, totalAmount }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Cart Summary</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Item</Text>
            <Text style={styles.tableColHeader}>Price</Text>
          </View>
          {cartItems.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.tableCol}>{item.title}</Text>
              <Text style={styles.tableCol}>${item.price.toFixed(2)}</Text>
            </View>
          ))}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Total</Text>
            <Text style={styles.tableCol}>${totalAmount.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
