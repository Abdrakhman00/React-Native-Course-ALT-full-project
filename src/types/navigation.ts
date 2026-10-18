import type { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Home: undefined;
  Schedule: undefined;
  Courses: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  VerifyCode: { phone: string };
  ResetPassword: undefined;
  Register: undefined;
  CitySelect: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  CourseDetails: { courseId: string; title: string; teacher: string };
  AssignmentDetails: { assignmentId: string; title: string; subject: string; deadline: string };
  Assignments: undefined;
  Grades: undefined;
};
