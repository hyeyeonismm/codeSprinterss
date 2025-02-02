package Math;

import java.util.*;

public class 수복원하기2312 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        int i,a = 0;
        ArrayList<Integer> num = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        for(i=0;i<input;i++){
            num.add(sc.nextInt());
        }
        for(int n : num){
            if (Isprime(n))
                System.out.println(n + " 1");
            else{
                while (n != 1) {
                    for (i = 2; i <= n; i++) {
                        if (n % i == 0) {
                            if (map.get(i) == null)
                                map.put(i, 1);
                            else {
                                map.put(i, map.get(i) + 1);
                            }
                            break;
                        }
                    }
                    n = n/i;
                }
                List<Integer> keyList = new ArrayList<>(map.keySet());
                keyList.sort(Comparator.naturalOrder());
                for(i=0;i<keyList.size();i++){
                    System.out.println(keyList.get(i) + " "+ map.get(keyList.get(i)));
                }
                map.clear();
            }
        }
    }

    public static boolean Isprime(int num){

        for(int i=2;i<num;i++){
            if (num%i==0){
                return false;
            }
        }
        return true;
    }
}
