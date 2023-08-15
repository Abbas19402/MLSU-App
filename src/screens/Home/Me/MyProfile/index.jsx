import { View, Text } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../components/Profile/AvatarSection'
import ProfileDataDisplayComponent from '../../../../components/Profile/My Profile/DataDisplayComponent'
import SampleProfile from '../../../../constants/SampleProfileDataSchema'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const Student = useSelector(state => state.login.student).student

  const ProfileStudent = [
      {
          detailsTitle: 'General Details',
          details: {
              course: {
                  keyTitle: 'Course',
                  value: Student.generalDetails.course_enrolled
              },
              batch: {
                  keyTitle: 'Batch',
                  value: Student.generalDetails.batch
              },
              department: {
                  keyTitle: 'Department',
                  value: Student.generalDetails.department
              },
              enrollmentId: {
                  keyTitle: 'Enrollment ID',
                  value: Student.generalDetails.enrollment_id
              },
              enrollmentDate: {
                  keyTitle: 'Enrollment Date',
                  value: Student.generalDetails.enrollment_date
              }
          }
      },
      {
          detailsTitle: 'Personal Details',
          details: {
              dob: {
                  keyTitle: 'Date Of Birth',
                  value: Student.personalDetails.date_of_birth
              },
              gender: {
                  keyTitle: 'Gender',
                  value: Student.personalDetails.gender
              },
              bloodGroup: {
                  keyTitle: 'Blood Group',
                  value: Student.personalDetails.bloodGroup
              },
              nationality: {
                  keyTitle: 'Nationality',
                  value: Student.personalDetails.nationality
              },
              fatherName: {
                  keyTitle: `Father${"'"}s Name`,
                  value: Student.personalDetails.father_name
              },
              motherName: {
                  keyTitle: `Mother${"'"}s Name`,
                  value: Student.personalDetails.mother_name
              }
          }
      },
      {
          detailsTitle: 'Address',
          details: {
              home: {
                  keyTitle: 'Home',
                  value: Student.addressDetails.home
              },
              city: {
                  keyTitle: 'City',
                  value: Student.addressDetails.city
              },
              state: {
                  keyTitle: 'State',
                  value: Student.addressDetails.state
              },
              country: {
                  keyTitle: 'Country',
                  value: Student.addressDetails.country
              },
              pin: {
                  keyTitle: 'Pin',
                  value: Student.addressDetails.pin_code
              }
          }
      },
      {
          detailsTitle: 'Contact',
          details: {
              mobile: {
                  keyTitle: 'Mobile',
                  value: Student.contactDetails.mobile
              },
              homePhone: {
                  keyTitle: 'Home Phone',
                  value: Student.contactDetails.emergency
              },
              email: {
                  keyTitle: 'Email',
                  value: Student.contactDetails.email
              }
          }
      }
    ]
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <AvatarSection 
        name={Student.name}
        batch={`${Student.generalDetails.course_enrolled} - ${Student.generalDetails.batch}`}
      />
      <ProfileDataDisplayComponent data={ProfileStudent}/>
      <Text style={{ color: 'gray' }}></Text>
    </View>
  )
}

export default MyProfile