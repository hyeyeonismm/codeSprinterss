package Hash;
import java.util.*;

public class 베스트앨범 {
    public int[] solution(String[] genres, int[] plays) {
        ArrayList<Integer> temp = new ArrayList<>();
        int[] result;
        HashMap<String, Integer> genres_cnt = new HashMap<>();
        HashMap<Integer, Integer> plays_idx = new HashMap<>();
        for(int i=0;i<genres.length;i++){
            if(genres_cnt.containsKey(genres[i])) {
                genres_cnt.replace(genres[i],genres_cnt.get(genres[i])+1);
            }else{
                genres_cnt.put(genres[i],0);
            }
            plays_idx.put(plays[i],i);
        }

        List<Integer> list = new ArrayList<>(plays_idx.keySet());
        Collections.reverse(list);
        for(int i=0;i<plays.length;i++){
            if(genres_cnt.get(genres[i])==2) continue;
            temp.add(i);
        }

        result = new int[temp.size()];
        for(int i=0;i<temp.size();i++){
            result[i] = temp.get(i);
        }

        return result;
    }
}
