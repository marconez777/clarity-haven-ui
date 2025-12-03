import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const CardSkeleton = () => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-8 w-16" />
      <Skeleton className="h-3 w-20 mt-2" />
    </CardContent>
  </Card>
);

export const TableRowSkeleton = ({ cols = 5 }: { cols?: number }) => (
  <tr className="border-b">
    {Array.from({ length: cols }).map((_, i) => (
      <td key={i} className="py-3 px-4">
        <Skeleton className="h-4 w-full" />
      </td>
    ))}
  </tr>
);

export const ListItemSkeleton = () => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24 mt-1" />
      </div>
    </div>
    <Skeleton className="h-4 w-16" />
  </div>
);

export const DashboardSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-8 w-32" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <ListItemSkeleton key={i} />
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <ListItemSkeleton key={i} />
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);
