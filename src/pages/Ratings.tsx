import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Ratings = () => {
  const players = [
    { id: 1, name: 'Алексей Иванов', points: 1250, rank: 1, wins: 45, losses: 12, winRate: 79 },
    { id: 2, name: 'Мария Петрова', points: 1180, rank: 2, wins: 42, losses: 15, winRate: 74 },
    { id: 3, name: 'Дмитрий Смирнов', points: 1050, rank: 3, wins: 38, losses: 18, winRate: 68 },
    { id: 4, name: 'Елена Козлова', points: 980, rank: 4, wins: 35, losses: 20, winRate: 64 },
    { id: 5, name: 'Игорь Волков', points: 920, rank: 5, wins: 32, losses: 22, winRate: 59 },
    { id: 6, name: 'Анна Соколова', points: 880, rank: 6, wins: 30, losses: 24, winRate: 56 },
    { id: 7, name: 'Сергей Новиков', points: 840, rank: 7, wins: 28, losses: 25, winRate: 53 },
    { id: 8, name: 'Ольга Морозова', points: 810, rank: 8, wins: 26, losses: 27, winRate: 49 },
  ];

  const getMedalColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white';
    if (rank === 2) return 'bg-gradient-to-br from-gray-300 to-gray-500 text-white';
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-800 text-white';
    return 'bg-muted text-foreground';
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="CircleDot" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Padel club<br/>Завода имени Ильича</span>
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">
              <Icon name="Home" className="mr-2 h-4 w-4" />
              Главная
            </Link>
          </Button>
        </div>
      </header>

      <section className="container px-4 py-12 md:py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Рейтинг игроков</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Следите за лучшими игроками клуба и их достижениями
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {players.slice(0, 3).map((player, idx) => (
              <Card 
                key={player.id}
                className="text-center hover:shadow-2xl transition-all hover:scale-105 animate-scale-in border-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mx-auto mb-4 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold ${getMedalColor(player.rank)}`}>
                    {player.rank}
                  </div>
                  <CardTitle className="text-2xl mb-2">{player.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{player.points}</div>
                  <p className="text-sm text-muted-foreground">рейтинговых очков</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Побед:</span>
                      <span className="font-semibold">{player.wins}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Поражений:</span>
                      <span className="font-semibold">{player.losses}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Винрейт:</span>
                      <Badge variant="outline" className="bg-secondary/10">{player.winRate}%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Полная таблица рейтинга</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {players.map((player, idx) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted transition-all animate-fade-in border hover:border-primary/50"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${getMedalColor(player.rank)}`}
                      >
                        {player.rank}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-lg mb-1">{player.name}</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>
                            <Icon name="TrendingUp" className="inline h-3 w-3 mr-1" />
                            Побед: {player.wins}
                          </span>
                          <span>
                            <Icon name="TrendingDown" className="inline h-3 w-3 mr-1" />
                            Поражений: {player.losses}
                          </span>
                          <span className="hidden sm:inline">
                            Винрейт: {player.winRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{player.points}</p>
                      <p className="text-xs text-muted-foreground">очков</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Как работает рейтинг</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Plus" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Начисление очков</p>
                    <p className="text-muted-foreground">+50 очков за победу в матче</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Minus" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Снятие очков</p>
                    <p className="text-muted-foreground">-20 очков за поражение</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Trophy" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Турниры</p>
                    <p className="text-muted-foreground">Удвоенные очки за турнирные матчи</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="RefreshCw" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Обновление</p>
                    <p className="text-muted-foreground">Рейтинг обновляется в реальном времени</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Ratings;