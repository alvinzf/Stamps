import 'package:mini_test/mini_test.dart' as mini_test;

void main(List<String> arguments) {
  for (int i = 1; i <= 100; ++i) {
    //Check if number is able to divided by 3
    bool bagiTiga = (i % 3 == 0);
    //Check if number is able to divided by 5
    bool bagiLima = (i % 5 == 0);
    //If can be divided by 3 and 5 will print ApaBole
    if (bagiTiga && bagiLima) {
      print("ApaBole");
    }
    //If can be divided by 3 will print Apa
    else if (bagiTiga) {
      print("Apa");
    }
    //If can be divided by 5 will print Bole
    else if (bagiLima) {
      print("Bole");
    } else {
      print(i);
    }
  }
}
