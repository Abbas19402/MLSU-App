import { View, Text } from 'react-native'
import React from 'react'
import AvatarSection from '../../../../components/Profile/AvatarSection'
import ProfileDataDisplayComponent from '../../../../components/Profile/My Profile/DataDisplayComponent'
import { useSelector } from 'react-redux'
import { FlatList } from 'native-base'

const MyProfile = () => {
  const Student = useSelector(state => state.login.student)
  const loginCategory = useSelector(state => state.login.loginCategory)
  const Faculty = useSelector(state => state.login.faculty)

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

    const ProfileFaculty = [
        {
            detailsTitle: 'Personal Details',
            details: {
                name: {
                    keyTitle: 'Name',
                    value: `${Faculty.personalDetails.firstName} ${Faculty.personalDetails.lastName}`
                },
                gender: {
                    keyTitle: 'Gender',
                    value: Faculty.personalDetails.gender
                },
                date_of_birth: {
                    keyTitle: 'Date of Birth',
                    value: Faculty.personalDetails.date_of_birth
                }
            }
        },
        {
            detailsTitle: 'Address Details',
            details: {
                home: {
                    keyTitle: 'Home',
                    value: Faculty.contactDetails.address
                },
                city: {
                    keyTitle: 'City',
                    value: Faculty.contactDetails.city
                },
                state: {
                    keyTitle: 'State',
                    value: Faculty.contactDetails.state
                },
                country: {
                    keyTitle: 'Country',
                    value: Faculty.contactDetails.country
                }
            }
        },
        {
            detailsTitle: 'Contact',
            details: {
                mobile: {
                    keyTitle: 'Mobile',
                    value: Faculty.contactDetails.phone
                },
                email: {
                    keyTitle: 'Email',
                    value: Faculty.contactDetails.email
                }
            }
        }
      ]
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <AvatarSection 
            name={loginCategory =='student' ? Student.name : `${Faculty.personalDetails.firstName} ${Faculty.personalDetails.lastName}`}
            batch={loginCategory =='student' && `${Student.generalDetails.course_enrolled} - ${Student.generalDetails.batch}`}
        />
        <ProfileDataDisplayComponent data={loginCategory == 'student' ? ProfileStudent : ProfileFaculty}/>
        {loginCategory == 'faculty' && <View style={{ alignSelf: 'stretch', flexDirection: 'column', marginBottom: 10 }}>
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 25, marginBottom: 15 }}>
                <Text style={{ color: 'darkblue', fontWeight: '400', fontSize: 17 }}>Qualification Details</Text>
            </View>
            <View style={{ flexDirection: 'column', alignSelf: 'stretch' }}>
                <FlatList 
                    style={{ marginBottom: 20 }}
                    data={Faculty.qualificationDetails.data}
                    renderItem={({ item, index }) => {
                        return <View style={{ alignSelf: 'stretch' , paddingHorizontal: 20, paddingVertical: 5, flexDirection:'row', backgroundColor: index%2 != 0? 'white' : '#f0f3fa'}}>
                            <View style={{ padding: 5, width: 150}}>
                                <Text style={{ color: 'gray', textTransform: 'capitalize' }}>{item.qualificationType}</Text>
                            </View>
                            <View style={{ padding: 5, width: 200}}>
                                <Text style={{ color: 'black',  }}>{item.degreeName}</Text>
                            </View>
                        </View> 
                    }}
                />
            </View>
        </View> }
        <Text style={{ color: 'gray' }}></Text>
    </View>
  )
}

export default MyProfile