package Math;

import java.util.ArrayList;
import java.util.Scanner;

public class 이름궁합테스트17269 {
    public static void main(String[] args) {
        int[] number = {3,2,1,2,4,3,1,3,1,1,3,1,3,2,1,2,2,2,1,2,1,1,1,2,2,1};

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        String name1 = sc.next();
        String name2 = sc.next();

        int min = n;
        if(n>m) min = m;

        ArrayList<String> name_list = new ArrayList<>();

        for(int i=0;i<min;i++) {
            name_list.add(String.valueOf(name1.charAt(i)));
            name_list.add(String.valueOf(name2.charAt(i)));
        }

        if(n>m) {
            for(int i=m;i<name1.length();i++) {
                name_list.add(String.valueOf(name1.charAt(i)));
            }
        }else {
            for(int i=n;i<name2.length();i++) {
                name_list.add(String.valueOf(name2.charAt(i)));
            }
        }

        ArrayList<Integer> list = new ArrayList<>();
        for(int i=0;i<name_list.size();i++) {

            int index = ((int)(name_list.get(i).charAt(0)))-65;
            list.add(number[index]);
        }
        ArrayList<Integer> list2 = new ArrayList<>();
        while(true) {
            for(int i=0;i<list.size()-1;i++) {
                list2.add((list.get(i) + list.get(i+1))%10);
            }
            if(list2.size()==2) break;
            list = new ArrayList<>(list2);
            list2.clear();
        }
        if(list2.get(0)!=0) System.out.print(list2.get(0));
        System.out.println(list2.get(1) + "%");
    }
}
