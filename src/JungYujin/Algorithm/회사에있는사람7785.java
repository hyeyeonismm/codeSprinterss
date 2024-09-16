package JungYujin.Algorithm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class 회사에있는사람7785 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        HashSet<String> hs = new HashSet<>();
        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            String action = st.nextToken();
            if(action.equals("enter")) hs.add(name);
            else hs.remove(name);
        }
        ArrayList<String> list = new ArrayList<>(hs);
        Collections.sort(list);
        Collections.reverse(list);
        for(int i=0;i<list.size();i++) System.out.println(list.get(i));
    }
}
