import React from 'react'
import styled from 'styled-components';
import MaxWidth from "@styles/maxWidth"

import Layout from '@components/layout'
import SEO from '@components/seo'

const PolicyWrapper = styled.div` 
  padding: 40px 0px;
`
const OrderedList = styled.ol`
  margin-left: 40px;
`
const UnorderedList = styled.ul`
  margin-left: 40px;
`
const ListItem = styled.li`
  padding-bottom: 20px;
`

const PolicyPage = () => (
  <Layout>
    <SEO title='Policies' />
    <MaxWidth>
      <PolicyWrapper>
        <h2>Dance Magic Policies and Procedures</h2>
        <p>Students and parents are asked to become familiar with the policies and procedures at Dance Magic. If you have any questions, please call or drop by the studio. We will be more than happy to help you.</p>
        <h2>Dress Code</h2>
        <UnorderedList>
          <ListItem><b>Tap:</b> Solid color leotard with suntan tights or black jazz pants with leotard or t-shirt. Black tap shoes with elastic.</ListItem>
          <ListItem><b>Jazz and Modern:</b> Solid color leotard with suntan tights or black jazz pants with leotard or t-shirt. Tan jazz shoes or foot undeez.</ListItem>
          <ListItem><b>Ballet:</b> Solid color leotard, pink tights, pink ballet shoes, hair in a bun.</ListItem>
          <ListItem><b>Creative:</b> Pink leotard, pink tights, pink ballet shoes.</ListItem>
          <ListItem><b>Hip hop:</b> Black dance pants or capri length pants, t-shirt and sneakers.</ListItem>
        </UnorderedList>
        <p>Students are required to wear their hair in a ponytail or bun in all dance classes. No jewelry. No street clothes are to be work during dance class.</p>
        <h2>Tuition</h2>
        <p>Tuition is $55.00 per month. $55.00 is for one class per week for a total of 4 weeks or 1 month. If a student wishes to attend more than 1 class per week, tuition will be an additional $43.00 per month for that additional class. Tuition is due by the first week of every month. Tuition paid after the 15th day of each month will be charged an additional $25.00 late fee. There will be a total of 8 ½ payments from September to the end of May. The June payment is determined by the date of our annual recital. All technique classes will be $40.00. Please see our policy page for tuition information about holidays and missed classes.</p>
        <h2>Important Tuition Policy</h2>
        <p>All holidays have been deducted from the tuition schedule. If your child does not attend class, for whatever reason, tuition is still the same for the month. Please make sure tuition is in an envelope with your child’s name and class on it, so that proper credit may be given. Any checks returned to the studio for non-payment will be charged a $30.00 return fee.</p>
        <h2>Holidays</h2>
        <p>The studio will be closed for only the holidays below. These holidays have already been deducted from the tuition schedule.</p>
        <UnorderedList>
          <ListItem>Thanksgiving</ListItem>
          <ListItem>Christmas</ListItem>
          <ListItem>Easter</ListItem>
          <ListItem>Memorial Day</ListItem>
        </UnorderedList>
        <h2>Make Up Classes</h2>
        <p>If the studio is closed due to inclement weather, illness, etc., you will be notified. A make-up class will be arranged by your child’s teacher. All students should attend make-up classes because these classes will not be deducted from your tuition payment.</p>
        <h2>Dressing Rooms</h2>
        <p>Students are asked to keep all their belongings in the dressing room during class time.</p>
        <OrderedList>
          <ListItem>All clothes should be hung up and not thrown on the floor.</ListItem>
          <ListItem>There is no tap dancing in the dressing rooms.</ListItem>
          <ListItem>Students are to wait in the dressing room until their class begins. We ask that students are quiet in the dressing area while other classes are being conducted.</ListItem>
          <ListItem>Parents are reminded, students should come to the studio in some type of cover up (pants, skirt, jacket, etc.) and not just in their dance clothes.</ListItem>
          <ListItem>Students that need to change into their dance clothes should give ample time before class begins to change.</ListItem>
          <ListItem>There will be no eating, drinking or smoking in the dressing rooms.</ListItem>
        </OrderedList>
        <h2>Class Structure</h2>
        <OrderedList>
          <ListItem><b>Warm-up:</b> The warm-up is very important to all students. They are used to warm up students body, muscles and mind. To prevent serious injury. Students are encouraged to take the warm-up portion of the class very seriously.</ListItem>
          <ListItem><b>Across the floor:</b> This section of the class is still part of warm-up time. It is also used to teach students ways of using dance to travel across the floor. Students are taught different combinations of steps that will help them with the idea of traveling while dancing.</ListItem>
          <ListItem><b>Dance Combinations:</b> At the end of the class students are given a group of steps put together by the teacher. For a few weeks these steps are used and more steps are added. Students are encouraged to practice these steps and small combinations.</ListItem>
        </OrderedList>
        <p>The students are taught to train their minds as well as their bodies. No student will be asked to do anything they are not capable of or feel uncomfortable doing. Students should be encouraged to practice at home.</p>
        <h2>Annual Recital</h2>
        <p>In June Dance Magic students perform in our annual recital. In January students receive letters concerning a costume that must be purchased. Each class is taught a routine that they perform in the show. Our recital is scheduled for 2 shows and 1 dress rehearsal. Dates and times are announced in mid April. Not all students perform in both shows. Performances schedule will be posted in the studio.</p>
      </PolicyWrapper>
    </MaxWidth>
  </Layout>
)

export default PolicyPage
