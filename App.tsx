import './global.css'
import { ScrollView, Text, View } from 'react-native'

const LONG = 'The quick brown fox jumps over the lazy dog'

const CASES = [
  { label: 'numberOfLines={1}', expected: 'ends in "…"', props: {} },
  { label: '+ ellipsizeMode="tail" (control)', expected: 'ends in "…"', props: { ellipsizeMode: 'tail' as const } },
  { label: '+ onPress (control: not plain text)', expected: 'ends in "…"', props: { onPress: () => {} } },
  { label: '+ adjustsFontSizeToFit', expected: 'shrinks to fit', props: { adjustsFontSizeToFit: true } },
  {
    label: '+ adjustsFontSizeToFit + ellipsizeMode="tail" (control)',
    expected: 'shrinks to fit',
    props: { adjustsFontSizeToFit: true, ellipsizeMode: 'tail' as const },
  },
]

export default function App() {
  return (
    <ScrollView className="flex-1 bg-white" contentContainerClassName="gap-6 px-6 pt-20 pb-10">
      {CASES.map(({ label, expected, props }) => (
        <View key={label} className="gap-1">
          <Text className="text-xs text-gray-500">
            {label} → expected: {expected}
          </Text>
          <View className="w-60 border border-red-500">
            <Text className="text-2xl font-bold text-black" numberOfLines={1} {...props}>
              {LONG}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
