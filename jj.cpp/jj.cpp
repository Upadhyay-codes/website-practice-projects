#include<iostream>
#include<vector>
#include <string>
using namespace std;
int main () {
   int marks[6] = { 23,45,56,67,78,90};
   int mathMarks[6];
   mathMarks[0]= 90;
   mathMarks[1]= 89;
   mathMarks[2]= 78;
   mathMarks[3]= 76;
   mathMarks[4]= 78;
   mathMarks[5]= 100;
  //  cout << "these are marks of maths"<< endl;
  //  cout << mathMarks[0] << endl;
  //  cout << mathMarks[1] << endl;
  //  cout << mathMarks[2] << endl;
  //  cout << mathMarks[3] << endl;
  //  cout << mathMarks[4] << endl;
  //  cout << mathMarks[5] << endl;
  //  cout << "These are marks😁" << endl;
  for(int j =0; j<6; j++) {
    cout << "These are marks of maths " << j << "is " << mathMarks[j] << endl;
  }
  for (int i =0; i <6 ; i++) {
    cout << "These are marks " << i << " is " << marks[i] << endl;
  }

return 0;
}
