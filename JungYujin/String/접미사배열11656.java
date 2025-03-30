package String;

import java.util.*;

public class 접미사배열11656 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String[] arr = new String[s.length()];
        for(int i=0;i<arr.length;i++){
            arr[i] = s.substring(i,s.length());
        }
        List<String> list = Arrays.asList(arr);
        Collections.sort(list);
        for(int i=0;i<list.size();i++) System.out.println(list.get(i));
    }
}
