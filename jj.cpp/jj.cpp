#include<iostream>
#include<vector>
#include <string>
using namespace std;
int main () {
   int a=3;
   int* b;
   b =&a;
   cout << "the address of a is " <<&a<< endl;
   cout << "the address of a is " << b << endl;
   cout << "the value at address b is " << *b <<endl;
   int** c = &b;
return 0;
}
